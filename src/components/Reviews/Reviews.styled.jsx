import styled from 'styled-components';
export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const List = styled.ul`
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 20px;
`;
export const Item = styled.li`
  background-color: #80808096;
  border: 2px solid black;
  border-radius: 8px;
  padding: 16px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Title = styled.h2`
  margin-bottom: 8px;
`;

export const ReviewText = styled.p`
  font-size: 18px;
  font-weight: 500;
`;