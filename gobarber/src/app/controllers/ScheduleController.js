import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
   async index(req, res) {
      const { page = 1 } = req.query;

      const checkUserProvider = await User.findOne({
         where: { id: req.userId, provider: true },
      });

      if (!checkUserProvider) {
         return res.status(400).json({ error: 'User not provider' });
      }

      const { date } = req.query;
      const parsedDate = parseISO(date);

      const appoint = await Appointment.findAll({
         where: {
            provider_id: req.userId,
            canceled_at: null,
            limit: 20,
            offset: (page - 1) * 20,
            date: {
               [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
            },
            order: ['date'],
         },
      });

      return res.json(appoint);
   }
}

export default new ScheduleController();
