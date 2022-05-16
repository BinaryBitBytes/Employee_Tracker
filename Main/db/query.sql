SELECT department.dept_label AS department, roles.jobTitle
FROM roles
LEFT JOIN department
ON department.dept_id = department.id
ORDER BY department.dept_label