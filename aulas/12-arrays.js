const languages = [
    {
        name: "Python",
        year: 1991
    },
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    },
    {
        name: "COBOL",
        year: 1959
    }
];

languages.sort(function(a, b) {
    return a.year - b.year;
});

console.log(languages);