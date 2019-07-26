import React, { useEffect, useState } from 'react';
import { format, isBefore, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { Container, Meet } from './styles';

export default function Dashboard() {
  const [meets, setMeets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('metts', {
        params: { page },
      });

      // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setMeets(response.data);
    }
    loadMeetups();
  }, [page]);

  function prevPage() {
    const npage = page - 1;

    if (page === 1) {
      toast.error("You're already on the first page!");
      return;
    }

    setPage(npage);
  }

  function nextPage() {
    if (meets.length < 5) {
      toast.error('There are no more items to display!');
      return;
    }

    const npage = page + 1;
    setPage(npage);
  }

  return (
    <Container>
      <div>
        <h2>My Meetups</h2>
        <Link to="/editing">
          <button type="submit">New Meet</button>
        </Link>
      </div>
      <header>
        <button type="button" onClick={prevPage}>
          <MdChevronLeft size={40} color="#fff" />
        </button>

        <strong>{page}</strong>
        <button type="button" onClick={nextPage}>
          <MdChevronRight size={40} color="#fff" />
        </button>
      </header>

      <ul>
        {meets.map(meet => (
          <Link to={`/details?meet=${meet.id}`} key={meet.id}>
            <Meet past={isBefore(parseISO(meet.date), new Date())}>
              <strong>{meet.titulo}</strong>
              <div>
                <span>
                  {format(parseISO(meet.date), "dd 'de' MMMM 'às' HH'h'", {
                    locale: pt,
                  })}
                </span>
                <MdChevronRight size={30} color="#fff" />
              </div>
            </Meet>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
