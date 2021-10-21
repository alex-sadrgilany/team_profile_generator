const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
    const intern = new Intern("Paula", 3, "paula@mail.com", "Rutgers");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.email).toContain("@");
    expect(intern.school).toEqual(expect.any(String));
});

test("gets interns's name from function", () => {
    const intern = new Intern("Paula", 3, "paula@mail.com", "Rutgers");

    expect(intern.getName()).toBe("Paula");
});

test("gets interns's id from function", () => {
    const intern = new Intern("Paula", 3, "paula@mail.com", "Rutgers");

    expect(intern.getId()).toBe(3);
});

test("gets interns's email from function", () => {
    const intern = new Intern("Paula", 3, "paula@mail.com", "Rutgers");

    expect(intern.getEmail()).toBe("paula@mail.com");
    expect(intern.getEmail()).toContain("@");
});

test("gets engineer's school from function", () => {
    const intern = new Intern("Paula", 3, "paula@mail.com", "Rutgers");

    expect(intern.getSchool()).toBe("Rutgers");
});

test("running getRole returns 'Intern'", () => {
    const intern = new Intern("Paula", 3, "paula@mail.com", "Rutgers");

    expect(intern.getRole()).toBe("Intern");
});