const GetList = () => JSON.parse(localStorage.getItem('Data')) || [];

export default GetList;
