import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';
import User from '../models/User';
import File from '../models/File';
import Appointment from '../models/Appointment';

class AppointController {
   async index(req, res) {
      const { page = 1 } = req.query;

      const appointments = await Appointment.findAll({
         where: { user_id: req.userId, canceled_at: null },
         order: ['date'],
         attributes: ['id', 'date'],
         limit: 20,
         offset: (page - 1) * 20,
         include: [
            {
               model: User,
               as: 'provider',
               attributes: ['id', 'name'],
               include: [
                  {
                     model: File,
                     as: 'avatar',
                     attributes: ['id', 'path', 'url'],
                  },
               ],
            },
         ],
      });

      return res.json(appointments);
   }

   async store(req, res) {
      const schema = Yup.object().shape({
         provider_id: Yup.number().required(),
         date: Yup.date().required(),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      const { provider_id, date } = req.body;

      // Checa se usuário é provider
      const isProvider = await User.findOne({
         where: {
            id: provider_id,
            provider: true,
         },
      });
      // valida se usuario q vai receber a marcação é provider
      if (!isProvider) {
         return res.status(400).json({ error: 'Usuário não é um provedor' });
      }

      const hourStart = startOfHour(parseISO(date));
      // valida se a hora da marcação ja passou
      if (isBefore(hourStart, new Date())) {
         return res.status(400).json({ error: 'date not permited' });
      }

      // valida o horário é disponível

      const checkDate = await Appointment.findOne({
         where: {
            provider_id,
            canceled_at: null,
            date: hourStart,
         },
      });

      if (checkDate) {
         return res
            .status(400)
            .json({ error: 'Appoint date is not available' });
      }

      const appoint = await Appointment.create({
         user_id: req.userId,
         provider_id,
         date,
      });

      return res.json(appoint);
   }
}

export default new AppointController();
