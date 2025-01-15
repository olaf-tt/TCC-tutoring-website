// 번역 데이터
const translations = {
    en: {
        brand: "The Custom Coder",
        home: "Home",
        professional: "Professional",
        student: "Student",
        more: "More",
        professional_key1: "Basic and Practical Application for Non-Experts",
        professional_key2: "Customized Programming Tutoring for Current Projects",
        professional_key3: "Efficient and Quick Learning for Busy Professionals",
        more_btn: "Learn More",
        contact_btn: "Get in Touch",
        student_key1: "Project-based practice for portfolio development",
        student_key2: "Macro-level learning for developing programming skills",
        main_title_1: "Personalized 1:1",
        main_title_2: "Programming Tutoring",
        sub_title: "Online programming education for international learners",
    },
    ko: {
        brand: "The Custom Coder",
        home: "홈",
        professional: "현직자",
        student: "학생",
        more: "더보기",
        professional_key1: "비전공자를 위한 기초 그리고 실무 활용",
        professional_key2: "현직 프로젝트 맞춤 프로그래밍 과외",
        professional_key3: "바쁜 현대인에게 효율적이고 빠른 학습",
        more_btn: "자세히 보기",
        contact_btn: "상담하기",
        student_key1: "포트폴리오를 위한 프로젝트 위주 실습",
        student_key2: "프로그래밍 두뇌 형성을 위한 거시적 학습",
        main_title_1: "개인 맞춤형 1:1",
        main_title_2: "프로그래밍 과외",
        sub_title:"해외 학습자를 위한 온라인 프로그래밍 교육",
    }
};

// 현재 언어 변수 (기본값: 한국어)
let currentLanguage = 'ko';

// 언어 변경 함수
function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const translationKey = element.getAttribute('data-translate');
        element.textContent = translations[language][translationKey];
    });
}

// 언어 전환 함수 (버튼 클릭 시 호출됨)
function toggleLanguage() {
    if (currentLanguage === 'ko') {
        currentLanguage = 'en';
        document.getElementById('language-toggle').textContent = 'KO';
    } else {
        currentLanguage = 'ko';
        document.getElementById('language-toggle').textContent = 'EN';
    }
    changeLanguage(currentLanguage);
}

// 페이지 로드 시 기본 언어 설정 (기본은 한국어)
window.onload = function() {
    changeLanguage('ko');
}

window.addEventListener('load', function() {
    document.getElementById('language-toggle').disabled = false;
});