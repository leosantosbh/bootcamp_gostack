import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
import { MdEvent, MdPlace, MdDeleteForever, MdEdit } from 'react-icons/md';
import api from '~/services/api';

import { cancelRequest } from '~/store/modules/meet/actions';

import { Content, Loc } from './styles';

export default function EditMeet(req) {
  const [det, setDet] = useState({});
  const [banner, setBanner] = useState([]);
  const [id, setId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('metts', {
        params: {
          meet: req.location.search.substr(
            req.location.search.indexOf('=') + 1
          ),
        },
      });

      setDet({
        ...response.data,
        dateFormatted: format(
          parseISO(response.data.date),
          "dd 'de' MMMM', às' H'h'",
          {
            locale: pt,
          }
        ),
      });
      setBanner(response.data.banner);
      setId(response.data.id);
    }
    loadMeetups();
  }, [req.location.search]);

  function handleCancel() {
    dispatch(cancelRequest(id));
  }

  return (
    <Content>
      <header>
        <div>
          <Link to={`/editing/${det.id}`}>
            <button type="button">
              <MdEdit size={20} color="fff" />
              Edit
            </button>
          </Link>
          <button type="button" onClick={handleCancel}>
            <MdDeleteForever size={20} color="#fff" />
            Cancel
          </button>
        </div>
        <img src={banner.url} alt="banner" />
      </header>

      <h1>{det.titulo}</h1>
      <strong>{det.descricao}</strong>
      <Loc>
        <span>
          <MdEvent size={20} color="#fff" />
          {det.dateFormatted}
        </span>
        <span>
          <MdPlace size={20} color="#fff" />
          {det.local}
        </span>
      </Loc>
    </Content>
  );
}
