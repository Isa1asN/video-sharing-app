// import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setHistory, setIsHistory } from '../state/vidSlice';

const client = axios.create({ baseURL: 'http://localhost:3004/api' });

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

function History() {
  const hisV = useSelector((state) => state.video.history);
  const isHistory = useSelector((state) => state.video.isHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await client.get('/v/history', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('t')}`,
          },
        });
        if (response.status === 200) {
          dispatch(setIsHistory(true));
          dispatch(setHistory(response.data));
        } else if (response.status === 404) {
          dispatch(setIsHistory(false));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistory();
  }, [dispatch]);

  let history = [...hisV].reverse();

  return isHistory ? (
    <Container>
      {history.map((vid, index) => (
        <Card
          key={index} // Using array index as a key, be cautious with this approach
          title={vid.title}
          userId={vid.userId}
          views={vid.views}
          imgUrl={vid.thumbnail}
          date={vid.createdAt}
        />
      ))}
    </Container>
  ) : (
    <center>
      <div>No data to display </div>
    </center>
  );
}

export default History;
