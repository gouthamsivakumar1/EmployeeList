import API from './apiHandler';

export const fetchEmployeeDetails = () =>
  API.get('5d565297300000680030a986')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(`data ::::`, JSON.stringify(error));
      return error;
    });
