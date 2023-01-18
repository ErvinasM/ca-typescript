const students = [
    {
      name: 'Panatėja',
      surname: 'Sulindytė',
      faculty: 'Informatikos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Operacinės sistemos',
          credits: 6,
          marks: [10, 7, 7, 6, 9]
        },
        {
          title: 'Algoritmų analizė',
          credits: 9,
          marks: [8, 8, 6, 4, 6]
        },
        {
          title: 'Tikimybės ir Statistika',
          credits: 6,
          marks: [9, 7, 8, 9, 6]
        },
        {
          title: 'Inžinerinis projektas',
          credits: 3,
          marks: [10, 8, 9, 8]
        },
        {
          title: 'Kompiuterių architektūra',
          credits: 6,
          marks: [6, 8, 7, 8, 8]
        }
      ]
    },
    {
      name: 'Serbentautas',
      surname: 'Bordiūras',
      faculty: 'Informatikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [7, 6, 9, 10, 8]
        },
        {
          title: 'Duomenų struktūros',
          credits: 6,
          marks: [7, 8, 9, 4, 8]
        },
        {
          title: 'Skaitmeninė logika',
          credits: 6,
          marks: [6, 8, 10, 9, 9]
        },
        {
          title: 'Objektinis programavimas',
          credits: 6,
          marks: [10, 8, 9, 8, 8]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [6, 7, 8, 8, 8]
        }
      ]
    },
    {
      name: 'Laptokas',
      surname: 'Klavianskas',
      faculty: 'Informatikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [9, 8, 10, 9, 10]
        },
        {
          title: 'Duomenų struktūros',
          credits: 6,
          marks: [9, 9, 10, 10, 8]
        },
        {
          title: 'Skaitmeninė logika',
          credits: 6,
          marks: [10, 10, 10, 9, 10]
        },
        {
          title: 'Objektinis programavimas',
          credits: 6,
          marks: [9, 8, 9, 10, 10]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [8, 9, 8, 10, 8]
        }
      ]
    },
    {
      name: 'Skaistė',
      surname: 'Kolbaitė',
      faculty: 'Chemijos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Organinė chemija',
          credits: 6,
          marks: [9, 9, 10, 9, 8]
        },
        {
          title: 'Inžinerinės medžiagos',
          credits: 3,
          marks: [10, 10, 10, 9, 9]
        },
        {
          title: 'Entalpija ir Entropija',
          credits: 6,
          marks: [9, 9, 9, 9]
        },
        {
          title: 'Polimerų atmainos ir produktai',
          credits: 9,
          marks: [10, 9, 8, 10, 7]
        },
        {
          title: 'Pramoninė chemija',
          credits: 6,
          marks: [9, 10, 10, 10, 9]
        }
      ]
    },
    {
      name: 'Cilindras',
      surname: 'Katalizatorius',
      faculty: 'Chemijos fakultetas',
      course: 2,
      modules: [
        {
          title: 'Organinė chemija',
          credits: 6,
          marks: [6, 8, 9, 4, 8]
        },
        {
          title: 'Inžinerinės medžiagos',
          credits: 3,
          marks: [9, 8, 7, 8, 10]
        },
        {
          title: 'Entalpija ir Entropija',
          credits: 6,
          marks: [7, 8, 9, 10, 6]
        },
        {
          title: 'Polimerų atmainos ir produktai',
          credits: 9,
          marks: [8, 9, 6, 4]
        },
        {
          title: 'Pramoninė chemija',
          credits: 6,
          marks: [8, 7, 9, 5, 9]
        }
      ]
    },
    {
      name: 'Grandinius',
      surname: 'Varžauskas',
      faculty: 'Elektros ir elektronikos fakultetas',
      course: 1,
      modules: [
        {
          title: 'Matematika',
          credits: 6,
          marks: [8, 9, 9, 9, 9]
        },
        {
          title: 'Elektos grandinės',
          credits: 6,
          marks: [8, 7, 9, 9, 10]
        },
        {
          title: 'Elektros tinklai',
          credits: 6,
          marks: [9, 9, 8, 8, 10]
        },
        {
          title: 'Braižyba',
          credits: 6,
          marks: [6, 8, 9, 8, 7]
        },
        {
          title: 'Fizika',
          credits: 6,
          marks: [9, 9, 9, 10, 8]
        }
      ]
    },
  ];
  
  console.groupEnd();
  
  console.groupCollapsed('1. Atspausdinti visus Informatikos fakulteto studentus');
  {
    function facultyIt(array)
        {
            const result = array.filter(info => info.faculty == "Informatikos fakultetas");
            result.forEach(student => {
                console.log(student.name+" "+student.surname); 
            });
        }

    facultyIt(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('2. Atspausdinti visus Chemijos fakulteto studentus');
  {
    function facultyCh(array)
        {
            const result = array.filter(info => info.faculty == "Chemijos fakultetas");
            result.forEach(student => {
                console.log(student.name+" "+student.surname); 
            });
        }

    facultyCh(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus');
  {
    function facultyE(array)
    {
        const result = array.filter(info => info.faculty == "Elektros ir elektronikos fakultetas");
        result.forEach(student => {
            console.log(student.name+" "+student.surname); 
        });
    }

facultyE(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('4. Atspausdinti tik pirmo kurso studentus');
  {
    function courseOne(array)
    {
        const result = array.filter(info => info.course == 1);
        result.forEach(student => {
            console.log(student.name+" "+student.surname); 
        });
    }

    courseOne(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('5. Atspausdinti tik antro kurso studentus');
  {
    function courseTwo(array)
    {
        const result = array.filter(info => info.course == 2);
        result.forEach(student => {
            console.log(student.name+" "+student.surname); 
        });
    }

    courseTwo(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('6. Atspausdinti tik trečio kurso studentus');
  {
    function courseThree(array)
    {
        const result = array.filter(info => info.course == 3);
        result.forEach(student => {
            console.log(student.name+" "+student.surname); 
        });
    }

    courseThree(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('7. Atspausdinti tik ketvirto kurso studentus');
  {
    function courseFour(array)
    {
        const result = array.filter(info => info.course == 4);
        result.forEach(student => {
            console.log(student.name+" "+student.surname); 
        });
    }

    courseFour(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius');
  {
    function studentAvg(array)
    {
        array.forEach(student => {
           let studentAvg = 0;
           let allmarks = 0;
            student.modules.forEach(mod => {
                mod.marks.forEach(mark => {
                    studentAvg = studentAvg + mark;
                    allmarks++;
                });
            });
            studentAvg = studentAvg/allmarks;
            console.log(student.name+" "+student.surname+"\nVidurkis: "+studentAvg.toFixed(2)+"\n");
        });
    }

    studentAvg(students);
  }
  
  console.groupCollapsed('9. Atspausdinti visų Informatikos fakulteto studentų vidurkius');
  {
    function studentITAvg(array)
    {
        const result = array.filter(info => info.faculty == "Informatikos fakultetas");
        result.forEach(student => {
           let studentAvg = 0;
           let allmarks = 0;
            student.modules.forEach(mod => {
                mod.marks.forEach(mark => {
                    studentAvg = studentAvg + mark;
                    allmarks++;
                });
            });
            studentAvg = studentAvg/allmarks;
            console.log(student.name+" "+student.surname+"\nVidurkis: "+studentAvg.toFixed(2)+"\n");
        });
    }

    studentITAvg(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('10. Atspausdinti visų Chemijos fakulteto studentų vidurkius');
  {
    function studentCHAvg(array)
    {
        const result = array.filter(info => info.faculty == "Chemijos fakultetas");
        result.forEach(student => {
           let studentAvg = 0;
           let allmarks = 0;
            student.modules.forEach(mod => {
                mod.marks.forEach(mark => {
                    studentAvg = studentAvg + mark;
                    allmarks++;
                });
            });
            studentAvg = studentAvg/allmarks;
            console.log(student.name+" "+student.surname+"\nVidurkis: "+studentAvg.toFixed(2)+"\n");
        });
    }

    studentCHAvg(students);
  }
  console.groupEnd();
  
  console.groupCollapsed('11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius');
  {
    function studentEAvg(array)
    {
        const result = array.filter(info => info.faculty == "Elektros ir elektronikos fakultetas");
        result.forEach(student => {
           let studentAvg = 0;
           let allmarks = 0;
            student.modules.forEach(mod => {
                mod.marks.forEach(mark => {
                    studentAvg = studentAvg + mark;
                    allmarks++;
                });
            });
            studentAvg = studentAvg/allmarks;
            console.log(student.name+" "+student.surname+"\nVidurkis: "+studentAvg.toFixed(2)+"\n");
        });
    }

    studentEAvg(students);
  }
  console.groupEnd();