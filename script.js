document.addEventListener("DOMContentLoaded", function() {
    const target = document.querySelector(".target");

    // Получаем размеры игрового поля
    const containerWidth = document.querySelector(".game-container").offsetWidth;
    const containerHeight = document.querySelector(".game-container").offsetHeight;

    // Генерируем случайное местоположение для картинки-мишени
    function randomPosition() {
        const randomX = Math.random() * (containerWidth - target.offsetWidth);
        const randomY = Math.random() * (containerHeight - target.offsetHeight);
        return { x: randomX, y: randomY };
    }

    // Устанавливаем новую позицию для картинки-мишени
    function setNewPosition() {
        const newPosition = randomPosition();
        target.style.left = `${newPosition.x}px`;
        target.style.top = `${newPosition.y}px`;
    }

    // Устанавливаем начальное положение картинки-мишени
    setNewPosition();

    // При наведении на картинку-мишень, меняем ее позицию
    target.addEventListener("mouseover", function() {
        setNewPosition();
    });
});
