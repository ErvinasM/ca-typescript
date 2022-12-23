array.forEach(student => {
   student.modules.forEach(mod => {
     let allmarks = 0;
    mod.marks.reduce((ac, v) => ac + v, allmarks);
    let summark = allmarks / mod.marks.length;
    console.log(student.name+" "+student.surname+"\n"+mod.title+" vidurkis: "+summark.toFixed(2)+"\n");
   });
});


