const db = require("../../db");

class e_d_rjoinservices {
  async joinedr() {
    try {
      const sql = `
    
      SELECT 
      e.employee_id,
      e.employee_name,
      d.department_id,
      d.department_name,
      d.department_address,
      r.role_description
  FROM 
      employees e
  JOIN 
      departments d ON e.department_id = d.department_id
  JOIN 
      roles r ON d.department_id = r.department_id;`;
      const [results] = await db.query(sql);
console.log(results);
      return results;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new e_d_rjoinservices();
