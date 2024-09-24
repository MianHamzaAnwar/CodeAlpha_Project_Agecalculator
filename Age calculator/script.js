function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const result = document.getElementById('result');
    
    if (day === "" || month === "" || year === "") {
        result.innerHTML = "Please enter a valid date of birth.";
        return;
    }

    const birthDate = new Date(year, month - 1, day); 
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 0) {
        result.innerHTML = "Invalid date. Please check the input.";
    } else {
        result.innerHTML = `You are ${age} years old.`;
    }

    result.style.opacity = '1'; 
}