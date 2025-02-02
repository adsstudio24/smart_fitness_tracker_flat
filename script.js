async function addWorkout() {
    const exercise = document.getElementById("exercise").value;
    const duration = document.getElementById("duration").value;
    const calories = document.getElementById("calories").value;

    await fetch('http://localhost:5000/workout', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exercise, duration, calories })
    });

    loadWorkouts();
}

async function loadWorkouts() {
    const response = await fetch('http://localhost:5000/workouts');
    const workouts = await response.json();
    document.getElementById("workouts").innerHTML = workouts.map(w => 
        `<li>${w.exercise} - ${w.duration} хв - ${w.calories} калорій</li>`).join("");
}

document.addEventListener("DOMContentLoaded", loadWorkouts);
