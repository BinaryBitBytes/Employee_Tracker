SELECT department.dept_label AS name, roles.jobTitle
FROM dept_label
LEFT JOIN department
ON department.id = department.id
ORDER BY department.dept_label