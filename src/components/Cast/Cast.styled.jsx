import styled from 'styled-components';
export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 16px;
`;
export const Item = styled.li`
  border-radius: 4px;
  overflow: hidden;
  width: 200px;
  text-align: center;
  background-color: grey;
  padding-bottom: 8px;
`;
export const Title = styled.h2`
  margin-left: 4px;
  margin-right: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;