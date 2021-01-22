////////////////////////////// Version 1 //////////////////////////////


function heroes(params) {
  return {
    fighter(name) {
      return {
        name: name,
        health: 100,
        stamina: 100,
        fight() {
          this.stamina--;
          console.log(`${this.name} slashes at the foe!`);
        },
      };
    },
    mage(name) {
      return {
        name: name,
        health: 100,
        mana: 100,
        cast(spell) {
          this.mana--, console.log(`${this.name} cast ${spell}`);
        },
      };
    },
  };
}


////////////////////////////// Version 2 //////////////////////////////


function heroes(params) {
  const canCast = (state) => ({
    cast: (spell) => {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    },
  });

  const canFight = (state) => ({
    fight: () => {
      console.log(`${state.name} slashes at the foe!`);
      state.stamina--;
    },
  });

  const mage = (name) => {
    const state = {
      name,
      health: 100,
      mana: 100,
    };
    return Object.assign(state, canCast(state));
  };

  const fighter = (name) => {
    const state = {
      name,
      health: 100,
      stamina: 100,
    };
    return Object.assign(state, canFight(state));
  };

  return { mage, fighter };
}