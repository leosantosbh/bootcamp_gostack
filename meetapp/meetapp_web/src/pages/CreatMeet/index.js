import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import * as Yup from 'yup';

import api from '~/services/api';
import BannerInput from './BannerInput/index';
import { Container, ButtonSub } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

import { addRequest, editRequest } from '~/store/modules/meet/actions';

const schema = Yup.object().shape({
  titulo: Yup.string().required('Title is required'),
  descricao: Yup.string().required('Description is required'),
  local: Yup.string().required('Location is required'),
  banner_id: Yup.number().required('Banner is required'),
});

// eslint-disable-next-line react/prop-types
export default function CreatMeet(req) {
  // eslint-disable-next-line react/prop-types
  const id = req.location.pathname.substr(
    req.location.pathname.indexOf('/', 3) + 1
  );

  const [meetup, setMeetup] = useState({});
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  function handleSubmit({ titulo, descricao, local, banner_id }) {
    if (id === '/editing') {
      dispatch(addRequest(titulo, descricao, date, local, banner_id));
    } else {
      dispatch(editRequest(titulo, descricao, date, local, banner_id, id));
    }
  }

  function handleChange(selectedDate) {
    setDate(selectedDate);
  }

  useEffect(() => {
    if (id === '/editing') return;
    async function getMeetup() {
      const response = await api.get(`metts?meet=${id}`);

      setMeetup({
        ...response.data,
        banner_id: response.data.banner.id,
        url: response.data.banner.url,
      });
      setDate(parseISO(response.data.date));
    }

    getMeetup();
  }, [id]);

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput
          imageURL={meetup.url}
          imageID={meetup.banner_id}
          name="banner_id"
        />
        <Input name="titulo" placeholder="Title Meetup" />
        <Input name="descricao" multiline placeholder="Descripiton Meetup" />

        <DatePicker
          autoComplete="off"
          name="date"
          selected={date}
          onChange={handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd/MM/yyyy HH:mm"
          timeCaption="Horário"
          placeholderText="Meetup date"
          locale={pt}
        />
        <Input name="local" placeholder="Locale" />

        <ButtonSub type="submit">Save Meet</ButtonSub>
      </Form>
    </Container>
  );
}
