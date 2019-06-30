import { Op } from 'sequelize';
import { isBefore } from 'date-fns';
import User from '../models/User';
import Mettup from '../models/Mett';
import Banner from '../models/Banner';
import Agend from '../models/Agend';

class AgendController {
   async index(req, res) {
      const { page = 1 } = req.query;

      const agend = await Agend.findAll({
         where: { user_id: req.userId },
         limit: 5,
         offset: (page - 1) * 5,
         include: [
            {
               model: Mettup,
               where: {
                  date: {
                     [Op.gt]: new Date(),
                  },
               },
               attributes: ['titulo', 'descricao', 'local', 'date'],
               include: [
                  { model: User, attributes: ['name', 'email'] },
                  { model: Banner, attributes: ['path', 'url'] },
               ],
            },
            {
               model: User,
               attributes: ['name', 'email'],
            },
         ],
         order: [[Mettup, 'date']],
      });

      return res.json(agend);
   }

   async store(req, res) {
      const user = await User.findByPk(req.userId, {
         attributes: ['id'],
      });
      const mettup = await Mettup.findByPk(req.params.id, {
         attributes: ['id', 'date', 'user_id'],
      });

      const agend = await Agend.findOne({
         where: { user_id: user.id, mett_id: req.params.id },
      });

      const checkDate = await Agend.findOne({
         where: { user_id: user.id },
         include: [
            {
               model: Mettup,
               required: true,
               where: {
                  date: mettup.date,
               },
            },
         ],
      });

      if (user.id === mettup.user_id) {
         return res.status(400).json({ error: 'Usuário já é organizador' });
      }

      if (isBefore(mettup.date, new Date())) {
         return res.status(400).json({ error: 'Evento já ocorreu' });
      }

      if (agend) {
         return res.status(400).json({ error: 'Já inscrito no evento' });
      }

      if (checkDate) {
         return res.status(400).json({ error: 'Existe conflito de horário' });
      }

      const subscribe = await Agend.create({
         user_id: user.id,
         mett_id: mettup.id,
      });

      // desestruturar para pegar alguns campos de req.fil
      return res.json(subscribe);
   }
}

export default new AgendController();
