// HÌNH LÁ 
const LEAF_IMAGES = [
    { 
        url: 'https://i.ibb.co/dwSTjRYr/Leaf.png', 
        name: 'Lá xanh'
    },
];

// VỊ TRÍ CỐ ĐỊNH CỦA LÁ TRÊN CÂY
const FIXED_POSITIONS = [
    { x: 445, y: 317 },  // 1
    { x: 442, y: 291 },  // 2
    { x: 415, y: 288 },  // 3
    { x: 395, y: 279 },  // 4
    { x: 466, y: 280 },  // 5
    { x: 461, y: 258 },  // 6
    { x: 442, y: 255 },  // 7
    { x: 426, y: 249 },  // 8
    { x: 500, y: 227 },  // 9
    { x: 478, y: 221 },  // 10
    { x: 502, y: 203 },  // 11
    { x: 489, y: 189 },  // 12
    { x: 474, y: 205 },  // 13
    { x: 449, y: 213 },  // 14
    { x: 427, y: 206 },  // 15
    { x: 421, y: 229 },  // 16
    { x: 402, y: 243 },  // 17
    { x: 380, y: 261 },  // 18
    { x: 367, y: 229 },  // 19
    { x: 345, y: 225 },  // 20
    { x: 351, y: 260 },  // 21 
    { x: 406, y: 215 },  // 22
    { x: 406, y: 182 },  // 23
    { x: 384, y: 193 },  // 24
    { x: 360, y: 198 },  // 25
    { x: 479, y: 150 },  // 26
    { x: 458, y: 146 },  // 27
    { x: 449, y: 103 },  // 28
    { x: 432, y: 121 },  // 29
    { x: 420, y: 146 },  // 30
    { x: 400, y: 135 },  // 31
    { x: 379, y: 133 },  // 32
    { x: 389, y: 157 },  // 33
    { x: 363, y: 162 },  // 34
    { x: 341, y: 175 },  // 35
    { x: 324, y: 195 },  // 36
    { x: 307, y: 207 },  // 37
    { x: 360, y: 142 },  // 38
    { x: 336, y: 153 },  // 39
    { x: 409, y: 81 },   // 40
    { x: 394, y: 70 },   // 41
    { x: 379, y: 93 },   // 42
    { x: 345, y: 50 },   // 43
    { x: 321, y: 61 },   // 44
    { x: 334, y: 91 },   // 45
    { x: 344, y: 119 },  // 46
    { x: 318, y: 128 },  // 47
    { x: 309, y: 96 },   // 48
    { x: 296, y: 90 },   // 49
    { x: 302, y: 149 },  // 50
    { x: 282, y: 152 },  // 51
    { x: 251, y: 126 },  // 52
    { x: 231, y: 82 },   // 53
    { x: 248, y: 49 },   // 54
    { x: 275, y: 53 },   // 55
    { x: 294, y: 48 },   // 56
    { x: 276, y: 80 },   // 57
    { x: 273, y: 114 },  // 58
    { x: 215, y: 105 },  // 59
    { x: 198, y: 108 },  // 60
    { x: 179, y: 56 },   // 61
    { x: 154, y: 77 },   // 62
    { x: 142, y: 107 },  // 63
    { x: 175, y: 121 },  // 64
    { x: 173, y: 97 },   // 65
    { x: 204, y: 153 },  // 66
    { x: 154, y: 166 },  // 67
    { x: 130, y: 141 },  // 68
    { x: 78, y: 152 },   // 69
    { x: 114, y: 158 },  // 70
    { x: 118, y: 191 },  // 71
    { x: 191, y: 175 },  // 72
    { x: 187, y: 202 },  // 73
    { x: 162, y: 198 },  // 74
    { x: 174, y: 235 },  // 75
    { x: 190, y: 257 },  // 76
    { x: 223, y: 258 },  // 77
    { x: 159, y: 281 },  // 78
    { x: 124, y: 319 },  // 79
    { x: 122, y: 341 },  // 80
    { x: 69, y: 310 },   // 81
    { x: 74, y: 290 },   // 82
    { x: 96, y: 299 },   // 83
    { x: 124, y: 291 },  // 84
    { x: 45, y: 203 },   // 85
    { x: 70, y: 220 },   // 86
    { x: 99, y: 181 },   // 87
    { x: 104, y: 213 },  // 88
    { x: 118, y: 243 },  // 89
    { x: 72, y: 262 },   // 90
    { x: 106, y: 255 },  // 91
    { x: 146, y: 255 },  // 92
    { x: 235, y: 186 },  // 93
    { x: 250, y: 102 },  // 94
    { x: 306, y: 172 },  // 95
    { x: 278, y: 186 },  // 96
    { x: 328, y: 273 },  // 97
    { x: 235, y: 219 }   // 98
];

// Current position index for fixed positions
let currentPositionIndex = 0;

// Global state
let leaves = [];
let uniqueStudents = new Set();
let uniqueTeachers = new Set();

// DOM Elements
const leavesContainer = document.getElementById('leaves-container');
const leafCountElement = document.getElementById('leaf-count');
const studentCountElement = document.getElementById('student-count');
const teacherCountElement = document.getElementById('teacher-count');
const addLeafButton = document.getElementById('addLeafButton');
const formModal = document.getElementById('formModal');
const closeModal = document.getElementById('closeModal');
const gratitudeForm = document.getElementById('gratitudeForm');
const loadingMessage = document.getElementById('loading-message');

// API endpoints
const API_BASE = '/.netlify/functions';
const GET_LEAVES_API = `${API_BASE}/get-leaves`;
const ADD_LEAF_API = `${API_BASE}/add-leaf`;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    showLoading(true);
    
    try {
        await loadLeavesFromAPI();
        updateStats();
        renderLeaves();
        add97LeavesButton();
        setupEventListeners();
    } catch (error) {
        console.error('Error initializing app:', error);
        showSuccessMessage('❌ Lỗi kết nối cơ sở dữ liệu. Vui lòng thử lại sau!', true);
    } finally {
        showLoading(false);
    }
}

// API FUNCTIONS
async function loadLeavesFromAPI() {
    try {
        const response = await fetch(GET_LEAVES_API);
        if (!response.ok) {
            throw new Error('Failed to fetch leaves');
        }
        leaves = await response.json();
        updateUniqueSets();
        console.log(`📦 Loaded ${leaves.length} leaves from database`);
        
        // Cập nhật currentPositionIndex để tránh trùng lặp vị trí
        if (leaves.length > 0) {
            currentPositionIndex = leaves.length % FIXED_POSITIONS.length;
        }
    } catch (error) {
        console.error('Error loading leaves:', error);
        leaves = [];
        throw error;
    }
}

async function saveLeafToAPI(leafData) {
    try {
        const response = await fetch(ADD_LEAF_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leafData)
        });

        if (!response.ok) {
            throw new Error('Failed to save leaf');
        }

        const savedLeaf = await response.json();
        return savedLeaf;
    } catch (error) {
        console.error('Error saving leaf:', error);
        throw error;
    }
}

// Lấy vị trí pixel cố định cho lá
function getFixedLeafPosition() {
    if (FIXED_POSITIONS.length === 0) {
        return { x: 400, y: 300, zone: "default" };
    }
    
    const position = FIXED_POSITIONS[currentPositionIndex];
    currentPositionIndex = (currentPositionIndex + 1) % FIXED_POSITIONS.length;
    
    return position;
}

// Thêm leaf mới - CHỈ 1 KÍCH THƯỚC
async function addLeaf(name, teacher, message) {
    const position = getFixedLeafPosition();
    
    const newLeafData = {
        name: name,
        teacher: teacher,
        message: message,
        x: position.x,
        y: position.y,
        type: 'leaf',
        gradient: `gradient-${Math.floor(Math.random() * 8) + 1}`
    };

    try {
        // Lưu vào database
        const savedLeaf = await saveLeafToAPI(newLeafData);
        
        // Thêm vào state local
        leaves.unshift(savedLeaf);
        updateUniqueSets();
        updateStats();
        renderLeaves();
        
        return savedLeaf;
    } catch (error) {
        console.error('Error adding leaf:', error);
        throw error;
    }
}

// Helper functions
function updateUniqueSets() {
    uniqueStudents.clear();
    uniqueTeachers.clear();
    
    leaves.forEach(leaf => {
        if (leaf.name) uniqueStudents.add(leaf.name);
        if (leaf.teacher) uniqueTeachers.add(leaf.teacher);
    });
}

function updateStats() {
    if (leafCountElement) leafCountElement.textContent = leaves.length;
    if (studentCountElement) studentCountElement.textContent = uniqueStudents.size;
    if (teacherCountElement) teacherCountElement.textContent = uniqueTeachers.size;
}

function showLoading(show) {
    if (loadingMessage) {
        loadingMessage.style.display = show ? 'block' : 'none';
    }
}

function setupEventListeners() {
    if (addLeafButton) {
        addLeafButton.addEventListener('click', openForm);
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeForm);
    }

    if (gratitudeForm) {
        gratitudeForm.addEventListener('submit', handleFormSubmit);
    }

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === formModal) {
            closeForm();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeForm();
        }
    });

    // Setup click handlers for leaves
    setupLeafClickHandlers();
}

function openForm() {
    if (formModal) {
        formModal.style.display = 'block';
    }
}

function closeForm() {
    if (formModal) {
        formModal.style.display = 'none';
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName');
    const teacherName = document.getElementById('teacherName');
    const message = document.getElementById('message');
    
    if (!studentName || !teacherName || !message) return;
    
    const studentNameValue = studentName.value.trim();
    const teacherNameValue = teacherName.value.trim();
    const messageValue = message.value.trim();
    
    if (studentNameValue && teacherNameValue && messageValue) {
        try {
            showLoading(true);
            const newLeaf = await addLeaf(studentNameValue, teacherNameValue, messageValue);
            
            closeForm();
            studentName.value = '';
            teacherName.value = '';
            message.value = '';
            
            if (leaves.length === 1) {
                showSuccessMessage('🎉 Bạn đã thêm chiếc lá đầu tiên lên cây!\n\nCảm ơn bạn đã khởi đầu cho cây tri ân này! 💚', false, 5000);
            } else {
                showSuccessMessage('🎉 Lá tri ân của bạn đã được thêm vào cây!\n\nCây đang có ' + leaves.length + ' lá tri ân. 💚', false, 4000);
            }
        } catch (error) {
            showSuccessMessage('❌ Có lỗi xảy ra khi thêm lá. Vui lòng thử lại!', true);
        } finally {
            showLoading(false);
        }
    } else {
        showSuccessMessage('❌ Vui lòng điền đầy đủ thông tin!', true);
    }
}

// Render leaves to the tree
function renderLeaves() {
    if (!leavesContainer) return;
    
    leavesContainer.innerHTML = '';
    
    leaves.forEach((leaf, index) => {
        const leafElement = createLeafElement(leaf, index);
        leavesContainer.appendChild(leafElement);
    });

    // Setup click handlers after a short delay
    setTimeout(() => setupLeafClickHandlers(), 100);
}

// Create individual leaf element - CHỈ 1 KÍCH THƯỚC, ẨN CHỮ MẶC ĐỊNH
function createLeafElement(leaf, index) {
    const leafElement = document.createElement('div');
    // CHỈ DÙNG gradient, không dùng imageSize
    leafElement.className = `leaf ${leaf.gradient || 'gradient-1'}`;
    
    leafElement.setAttribute('data-leaf-id', leaf.id);
    
    // Sử dụng PIXEL cho vị trí từ database
    leafElement.style.left = (leaf.x || 400) + 'px';
    leafElement.style.top = (leaf.y || 300) + 'px';
    
    // Tạo nội dung chữ (ẩn mặc định)
    const leafContent = document.createElement('div');
    leafContent.className = 'leaf-content';
    leafContent.innerHTML = `
        <strong>${truncateText(leaf.name || 'Ẩn danh', 6)}</strong><br>
        <small>${truncateText(leaf.teacher || 'Thầy/Cô', 5)}</small>
    `;
    
    leafElement.appendChild(leafContent);
    
    // Tooltip khi hover
    leafElement.title = `💌 Click để xem lời tri ân từ ${leaf.name || 'Ẩn danh'}`;
    
    return leafElement;
}

// Hàm cắt ngắn text cho vừa với lá
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Setup click handlers for leaves 
function setupLeafClickHandlers() {
    if (!leavesContainer) return;
    
    leavesContainer.addEventListener('click', (event) => {
        const leafElement = event.target.closest('.leaf');
        if (leafElement) {
            const leafId = leafElement.getAttribute('data-leaf-id');
            if (leafId) {
                const leaf = leaves.find(l => l.id == leafId);
                if (leaf) {
                    showLeafDetail(leaf);
                }
            }
        }
    });
}

// HIỂN THỊ THÔNG TIN CHI TIẾT KHI CLICK
function showLeafDetail(leaf) {
    if (!leaf) return;
    
    const time = new Date(leaf.created_at).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const message = `
        🌿 <strong>LÁ TRI ÂN</strong> 🌿
        <br><br>
        💌 <strong>Lời tri ân:</strong><br>
        "<em>${leaf.message}</em>"
        <br><br>
        👤 <strong>Học sinh:</strong> ${leaf.name || 'Ẩn danh'}
        <br>
        🎓 <strong>Gửi đến:</strong> ${leaf.teacher || 'Thầy/Cô'}
        <br>
        📅 <strong>Thời gian:</strong> ${time}
        <br><br>
        <small>💝 Cảm ơn bạn đã gửi lời tri ân ý nghĩa!</small>
    `;
    
    showSuccessMessage(message, false, 10000);
}

// Global function để hiển thị thông báo 
function showSuccessMessage(message, isError = false, duration = 4000) {
    const oldMsg = document.querySelector('.success-message');
    if (oldMsg) oldMsg.remove();
    
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${isError ? '#f44336' : '#4caf50'};
        color: white;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 500px;
        text-align: center;
        line-height: 1.6;
        font-size: 16px;
        border: 3px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
        animation: messageAppear 0.4s ease;
    `;
    
    successMsg.innerHTML = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 50%;
        transition: background-color 0.3s;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    closeBtn.onclick = function() {
        successMsg.remove();
    };
    
    closeBtn.onmouseover = function() {
        this.style.backgroundColor = 'rgba(255,255,255,0.3)';
    };
    
    closeBtn.onmouseout = function() {
        this.style.backgroundColor = 'rgba(255,255,255,0.2)';
    };
    
    successMsg.appendChild(closeBtn);
    document.body.appendChild(successMsg);
    
    // Auto close after duration
    setTimeout(() => {
        if (successMsg.parentNode) {
            successMsg.style.animation = 'messageDisappear 0.3s ease';
            setTimeout(() => {
                if (successMsg.parentNode) {
                    successMsg.parentNode.removeChild(successMsg);
                }
            }, 300);
        }
    }, duration);
}

// Thêm animation cho message
const messageStyle = document.createElement('style');
messageStyle.textContent = `
    @keyframes messageAppear {
        from { 
            transform: translate(-50%, -50%) scale(0.7); 
            opacity: 0; 
        }
        to { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 1; 
        }
    }
    
    @keyframes messageDisappear {
        from { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 1; 
        }
        to { 
            transform: translate(-50%, -50%) scale(0.7); 
            opacity: 0; 
        }
    }
`;
document.head.appendChild(messageStyle);
// Thêm nút toàn bộ lá vào giao diện
function add97LeavesButton() {
    const actionSection = document.querySelector('.action-section');
    if (!actionSection) return;
    
    const btn = document.createElement('button');
    btn.innerHTML = '🚀 THÊM TOÀN BỘ LÁ';
    btn.className = 'add-leaf-btn simple-97-btn';
    btn.style.background = 'linear-gradient(135deg, #2196F3, #21CBF3)';
    btn.style.margin = '5px 0';
    
    btn.addEventListener('click', async function() {
        if (confirm('Thêm đầy đủ các lá tri ân tự động?')) {
            await create97Leaves();
        }
    });
    
    // Chèn nút sau nút thêm lá thông thường
    const addLeafBtn = document.getElementById('addLeafButton');
    addLeafBtn.parentNode.insertBefore(btn, addLeafBtn.nextSibling);
}

// Hàm tạo 97 lá
async function create97Leaves() {
    console.log('🍃 Đang tạo toàn bộ lá...');
    
    for(let i = 1; i <= 97; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        try {
            await addLeaf(`SV ${i}`, `Giáo viên ${i % 10 + 1}`, `Tri ân ${i}`);
        } catch (error) {
            console.error(`Lỗi khi thêm lá ${i}:`, error);
        }
    }
    
    // Thông báo khi hoàn thành
    setTimeout(() => {
        showSuccessMessage('🎉 Thay lời toàn thể sinh viên trường Đại học Hải Phòng em xin xin kính chúc quý Thầy Cô luôn dồi dào sức khỏe, hạnh phúc, và tiếp tục gặt hái nhiều thành công trong sự nghiệp trồng người cao quý! ❤', false, 4000);
    }, 1000);
}

