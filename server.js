const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/fitness_tracker', { useNewUrlParser: true, useUnifiedTopology: true });

const Workout = mongoose.model('Workout', new mongoose.Schema({ exercise: String, duration: Number, calories: Number }));

const app = express();
app.use(cors());
app.use(express.json());

app.post('/workout', async (req, res) => {
    const workout = new Workout(req.body);
    await workout.save();
    res.json({ message: 'Тренування збережено!' });
});

app.get('/workouts', async (req, res) => {
    const workouts = await Workout.find();
    res.json(workouts);
});

app.listen(5000, () => console.log('Сервер фітнесу запущено на порту 5000'));
