const quizController = require('../controllers/quiz'); // Router memanggil controller quiz 
const router = require('express').Router(); //memanggil fungsi router dari express

router.post('/', quizController.create); //menggunakan fungsi create ke dalam controller quiz
router.get('/', quizController.getAll);
router.get('/:id', quizController.findOne);
router.put('/:id', quizController.update);
router.delete('/:id', quizController.delete);
router.get('/category/:id', quizController.getByCategoryId);
router.get('/level/:id', quizController.getByLevelId);

module.exports = router;