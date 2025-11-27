// Antigraity Pet Shop - Main JavaScript

// DOMの読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    
    // ペットフィルター機能
    initPetFilter();
    
    // ギャラリーフィルター機能
    initGalleryFilter();
    
    // お問い合わせフォーム処理
    initContactForm();
    
    // スムーススクロール
    initSmoothScroll();
    
    // FAQ アコーディオン
    initFAQAccordion();
    
    // ソート機能
    initSortFunction();
    
});

/**
 * ペットフィルター機能の初期化
 */
function initPetFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const petCards = document.querySelectorAll('.pet-card');
    
    if (filterButtons.length === 0 || petCards.length === 0) {
        return; // フィルターが存在しないページではスキップ
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // アクティブ状態の切り替え
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // フィルターの取得
            const filterValue = this.getAttribute('data-filter');
            
            // ペットカードのフィルタリング
            petCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    // 表示
                    card.style.display = 'block';
                    // アニメーション
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // 非表示
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // 件数更新
            updatePetCount(filterValue);
        });
    });
    
    // 初期状態の設定
    petCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
    });
}

/**
 * ギャラリーフィルター機能の初期化
 */
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.gallery-filter-section .filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0 || galleryItems.length === 0) {
        return; // ギャラリーページ以外ではスキップ
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // アクティブ状態の切り替え
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // フィルターの取得
            const filterValue = this.getAttribute('data-filter');
            
            // ギャラリーアイテムのフィルタリング
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // 初期状態の設定
    galleryItems.forEach(item => {
        item.style.transition = 'all 0.3s ease';
    });
}

/**
 * ソート機能の初期化
 */
function initSortFunction() {
    const sortSelect = document.getElementById('sortSelect');
    
    if (!sortSelect) {
        return; // ソート機能がないページではスキップ
    }
    
    sortSelect.addEventListener('change', function() {
        const sortValue = this.value;
        const petCards = Array.from(document.querySelectorAll('.pet-card.detailed'));
        const container = document.querySelector('.pets-grid');
        
        if (!container) return;
        
        // ソート処理
        petCards.sort((a, b) => {
            switch(sortValue) {
                case 'price-low':
                    return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
                case 'price-high':
                    return parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price'));
                case 'age':
                    return parseInt(a.getAttribute('data-age')) - parseInt(b.getAttribute('data-age'));
                case 'new':
                default:
                    // 新着順（デフォルトの順序）
                    return 0;
            }
        });
        
        // DOMを再配置
        petCards.forEach(card => container.appendChild(card));
    });
}

/**
 * ペット件数の更新
 */
function updatePetCount(filterValue) {
    const resultCount = document.getElementById('resultCount');
    if (!resultCount) return;
    
    const petCards = document.querySelectorAll('.pet-card.detailed');
    let count = 0;
    
    petCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
            count++;
        }
    });
    
    resultCount.textContent = count;
}

/**
 * お問い合わせフォーム処理の初期化
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!form) {
        return; // フォームが存在しないページではスキップ
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // デフォルトの送信を防ぐ
        
        // フォームバリデーション
        if (!validateForm()) {
            return;
        }
        
        // フォームデータの取得（実際のサーバー送信はここで実装）
        const formData = new FormData(form);
        
        // デモ用：送信成功をシミュレート
        console.log('フォームデータ:', Object.fromEntries(formData));
        
        // ローディング表示（オプション）
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = '送信中...';
        submitButton.disabled = true;
        
        // 送信処理のシミュレート（実際はAjaxリクエストなど）
        setTimeout(() => {
            // フォームを非表示
            form.style.display = 'none';
            
            // 成功メッセージを表示
            successMessage.style.display = 'block';
            
            // ページトップにスクロール
            window.scrollTo({
                top: successMessage.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // ボタンを元に戻す
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // フォームをリセット（再送信用）
            form.reset();
        }, 1500);
    });
    
    /**
     * フォームバリデーション
     */
    function validateForm() {
        let isValid = true;
        
        // 必須項目のチェック
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (field.type === 'checkbox') {
                if (!field.checked) {
                    isValid = false;
                    showError(field, 'この項目は必須です');
                } else {
                    clearError(field);
                }
            } else if (!field.value.trim()) {
                isValid = false;
                showError(field, 'この項目は必須です');
            } else {
                clearError(field);
            }
        });
        
        // メールアドレスの形式チェック
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value)) {
                isValid = false;
                showError(emailField, '正しいメールアドレスを入力してください');
            }
        }
        
        return isValid;
    }
    
    /**
     * エラー表示
     */
    function showError(field, message) {
        // 既存のエラーメッセージを削除
        clearError(field);
        
        // エラースタイルを適用
        field.style.borderColor = '#FF6B6B';
        
        // エラーメッセージを追加
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = '#FF6B6B';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }
    
    /**
     * エラークリア
     */
    function clearError(field) {
        field.style.borderColor = '';
        
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
}

/**
 * スムーススクロールの初期化
 */
function initSmoothScroll() {
    // ページ内リンクのスムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // "#"のみの場合はスキップ
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const offsetTop = targetElement.offsetTop - 80; // ヘッダー分のオフセット
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * FAQのアコーディオン機能
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length === 0) {
        return; // FAQがないページではスキップ
    }
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (!question || !answer) return;
        
        // 初期状態で回答を非表示
        answer.style.display = 'none';
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease';
        
        question.style.cursor = 'pointer';
        
        question.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';
            
            // すべてのFAQを閉じる（オプション：1つだけ開く場合）
            // faqItems.forEach(otherItem => {
            //     const otherAnswer = otherItem.querySelector('.faq-answer');
            //     if (otherAnswer !== answer) {
            //         otherAnswer.style.display = 'none';
            //         otherAnswer.style.maxHeight = '0';
            //     }
            // });
            
            if (isOpen) {
                answer.style.maxHeight = '0';
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300);
            } else {
                answer.style.display = 'block';
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

/**
 * ナビゲーションのスクロール時の挙動（オプション）
 */
function initNavbarScroll() {
    const navbar = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
}

// オプション: ナビゲーションスクロール機能を有効化
initNavbarScroll();

/**
 * ペットカードのホバーエフェクト強化（オプション）
 */
function enhancePetCards() {
    const petCards = document.querySelectorAll('.pet-card');
    
    petCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// オプション: カードエフェクト強化を有効化
// enhancePetCards();

/**
 * 画像の遅延読み込み（オプション）
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// オプション: 遅延読み込みを有効化
// initLazyLoading();

/**
 * トップへ戻るボタン（オプション）
 */
function initScrollToTop() {
    // ボタンを作成
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #FF6B6B;
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollButton);
    
    // スクロール時の表示/非表示
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // クリックでトップへ
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ホバーエフェクト
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
    });
}

// オプション: トップへ戻るボタンを有効化
initScrollToTop();

console.log('Antigraity Pet Shop - JavaScript loaded successfully! 🐾');
