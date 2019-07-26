import styled from 'styled-components';

export const Container = styled.div`
  background: #a3bdad;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 86px;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 57px;
    height: 59px;
  }

  aside {
    display: flex;
    align-items: center;
    div {
      margin-right: 10px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid #eee;
  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 10px;
  }
  strong {
    display: block;
    padding-top: 5px;
    font-size: 24px;
    color: #7159c1;
  }

  a {
    display: block;
    margin-top: 2px;
    font-size: 14px;
    color: #fff;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;
