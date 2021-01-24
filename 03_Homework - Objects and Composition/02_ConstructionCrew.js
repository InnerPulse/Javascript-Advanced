function constructionCrew(worker) {
  if (worker.dizziness) {
    worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
    worker.dizziness = false;
    return worker;
  } else {
    return worker;
  }
}
