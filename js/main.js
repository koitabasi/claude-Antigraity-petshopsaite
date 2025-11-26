// Antigraity Pet Shop - Main JavaScript

// DOMの読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    
    // ペットフィルター機能
    initPetFilter();
    
    // お問い合わせフォーム処理
    initContactForm();
    
    // スムーススクロール
    initSmoothScroll();
    
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
        });
    });
    
    // 初期状態の設定
    petCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
    });
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
// initNavbarScroll();

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
 * FAQのアコーディオン機能（オプション）
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // 初期状態で回答を非表示
        answer.style.display = 'none';
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease';
        
        question.style.cursor = 'pointer';
        
        question.addEventListener('click', function() {
            const isOpen = answer.style.display === 'flex';
            
            if (isOpen) {
                answer.style.maxHeight = '0';
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300);
            } else {
                answer.style.display = 'flex';
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// オプション: FAQアコーディオンを有効化
// initFAQAccordion();

console.log('Antigraity Pet Shop - JavaScript loaded successfully! 🐾');
