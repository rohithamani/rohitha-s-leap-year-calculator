document.getElementById('leapYearForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = document.getElementById('year').value;
    const result = document.getElementById('result');
    result.innerHTML = '';

    let message;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        message = `<span class="leap-year">${year} is a leap year.</span>`;
    } else {
        message = `<span class="not-leap-year">${year} is not a leap year.</span>`;
    }

    result.innerHTML = message;
});

// Three.js 3D Background
let scene, camera, renderer, stars = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('background').appendChild(renderer.domElement);

    for (let i = 0; i < 1000; i++) {
        let starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
        let starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        let star = new THREE.Mesh(starGeometry, starMaterial);
        star.position.x = Math.random() * 600 - 300;
        star.position.y = Math.random() * 600 - 300;
        star.position.z = Math.random() * 600 - 300;
        scene.add(star);
        stars.push(star);
    }

    camera.position.z = 5;
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    stars.forEach(star => {
        star.rotation.x += 0.01;
        star.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
