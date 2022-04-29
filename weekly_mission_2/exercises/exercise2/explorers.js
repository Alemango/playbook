const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ];

    // 1. Obtener el nombre de todos los exploradores
    explorers.forEach(explorer => console.log(explorer.name));

    // 2. Obtener el stack de cada explorador
    explorers.forEach(explorer => console.log(explorer.name) + console.log(explorer.stack));

    //Crea una lista con los stacks de cada explorador
    const listaStacks = explorers.map(explorer => explorer.stack);
    console.log(listaStacks);

    //Obtener la lista de explorers que tengan "js" en su stack
    const jsExplorers = explorers.filter(explorer => explorer.stack.includes("js"));
    console.log(jsExplorers);

    //Obtener el primer explorador que sea de CDMX
    const explorerCDMX = explorers.find(explorer => explorer.city === "CDMX");
    console.log(explorerCDMX);

    //Obtener la suma de todos los excercises_completed
    const sumExercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0);
    console.log(sumExercises);

    //Obtener la validación si al menos uno de los exploradores tiene la propiedad exercisesFinished en frontend como true
    const isFinished = explorers.some(explorer => explorer.missions.frontend.exercisesFinished);
    console.log(isFinished);

    //Obtener la validación si todos los exploradores tienen la propiedad exercisesFinished en onboarding como true
    const isFinished2 = explorers.every(explorer => explorer.missions.onboarding.exercisesFinished);
    console.log(isFinished2);