import * as repository from '../repository/employeeRepository.js';


export const getEmployeeAll = (req, res) => {
    const result = repository.getEmployeeAll();
    res.send(`Hello Employee`);
    res.end();
}