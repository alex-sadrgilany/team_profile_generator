const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
    const employee = new Employee("George", 1, "george@mail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toContain("@");
});

test("gets employee's name from function", () => {
    const employee = new Employee("George", 1, "george@mail.com");

    expect(employee.getName()).toBe("George");
});

test("gets employee's id from function", () => {
    const employee = new Employee("George", 1, "george@mail.com");

    expect(employee.getId()).toBe(1);
});

test("gets employee's email from function", () => {
    const employee = new Employee("George", 1, "george@mail.com");

    expect(employee.getEmail()).toBe("george@mail.com");
    expect(employee.getEmail()).toContain("@");
});

test("running getRole returns 'Employee'", () => {
    const employee = new Employee("George", 1, "george@mail.com");

    expect(employee.getRole()).toBe("Employee");
});