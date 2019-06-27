import * as Yup from 'yup';
import User from '../models/User';

class UserController {
   async store(req, res) {
      const schema = Yup.object().shape({
         name: Yup.string().required(),
         email: Yup.string()
            .email()
            .required(),
         password: Yup.string()
            .required()
            .matches(
               '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}',
               'Senha deve conter 8 caracteres no mínimo, letras maisculas e caracteres especiais'
            ),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validarion fails' });
      }

      const userExists = await User.findOne({
         where: { email: req.body.email },
      });

      if (userExists) {
         return res.status(400).json({ error: 'Usuário já cadaastrado!' });
      }

      const { id, name, email, provider } = await User.create(req.body);

      return res.json({
         id,
         name,
         email,
         provider,
      });
   }

   async update(req, res) {
      const schema = Yup.object().shape({
         name: Yup.string(),
         email: Yup.string().email(),
         oldPassword: Yup.string(),
         password: Yup.string()
            .matches(
               '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}',
               'Senha deve conter 8 caracteres no mínimo, letras maisculas e caracteres especiais'
            )
            .when('oldPassword', (oldPassword, field) =>
               oldPassword ? field.required() : field
            ),
         confirmPassword: Yup.string().when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field
         ),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validarion fails' });
      }

      const { email, oldPassword } = req.body;

      const user = await User.findByPk(req.userId);

      if (email !== user.email) {
         const userExists = await User.findOne({
            where: { email },
         });

         if (userExists) {
            return res.status(400).json({ error: 'Usuário já cadaastrado!' });
         }
      }

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
         return res.status(401).json({ error: 'Password does not match' });
      }

      const { id, name, provider } = await user.update(req.body);

      return res.json({
         id,
         name,
         email,
         provider,
      });
   }
}

export default new UserController();
