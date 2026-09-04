// ===== 扬帆 AIHR — 全局交互系统 =====
(function(){
  var D = typeof AIHR_DB !== 'undefined' ? AIHR_DB : null;

  // ===== Toast 通知 =====
  window.showToast = function(msg, type){
    type = type || 'i';
    var c = document.getElementById('toastContainer') || document.getElementById('toastCtr') || document.getElementById('toasts');
    if(!c){ c = document.createElement('div'); c.id = 'toastContainer'; c.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px'; document.body.appendChild(c); }
    var t = document.createElement('div');
    t.className = 'toast ' + (type==='s'?'s':'i');
    t.textContent = msg;
    t.style.cssText = 'background:#fff;border-radius:16px;padding:12px 18px;box-shadow:0 4px 16px rgba(0,0,0,0.1);font-size:13px;font-weight:500;animation:slideRight .3s ease;max-width:360px;' + (type==='s'?'border-left:3px solid #2cc56f':'border-left:3px solid #3B82F6');
    c.appendChild(t);
    setTimeout(function(){ t.style.opacity='0'; t.style.transform='translateX(80px)'; t.style.transition='all .3s ease'; setTimeout(function(){ t.remove(); },300); },2200);
  };

  // ===== 动画重触发 =====
  window.reAnim = function(container){
    if(!container) container = document;
    container.querySelectorAll('.a-up').forEach(function(el){
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });
  };

  // ===== 标准化页面切换 =====
  var origGoPage = window.goPage;
  window.goPage = function(n, btn){
    if(origGoPage){ origGoPage(n, btn); }
    else {
      document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
      document.querySelectorAll('.nav-item').forEach(function(n){ n.classList.remove('active'); });
      var pg = document.getElementById('page'+n);
      if(pg) pg.classList.add('active');
      if(btn) btn.classList.add('active');
    }
    setTimeout(function(){
      var pg = document.querySelector('.page.active');
      if(pg) reAnim(pg);
    }, 50);
  };

  // ===== 全局点击交互 =====
  function initInteractions(){
    // 课程卡片
    document.querySelectorAll('[onclick*="goPage"]').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
    });

    // 筛选标签
    document.querySelectorAll('.filter-pills .f-pill, .todo-tab, .train-tab, .dept-card').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('click', function(){
        var parent = this.parentElement;
        if(parent){
          parent.querySelectorAll('.f-pill, .todo-tab, .train-tab, .dept-card').forEach(function(s){
            s.classList.remove('active');
          });
        }
        this.classList.add('active');
        var txt = this.textContent.trim();
        if(txt && txt.length<10) showToast('已切换到：' + txt);
      });
    });

    // 任务列表行
    document.querySelectorAll('.rich-table tbody tr, .styled-table tbody tr').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('click', function(e){
        if(e.target.closest('.check-cell') || e.target.closest('button') || e.target.closest('span[style]')) return;
        var name = this.querySelector('b');
        showToast(name ? name.textContent + ' — 点击查看详情' : '查看任务详情');
      });
    });

    // 看板卡片
    document.querySelectorAll('.br-card, .board-item').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('click', function(e){
        if(e.target.closest('.cb') || e.target.closest('.dots') || e.target.closest('.menu-dots')) return;
        var title = this.querySelector('.br-card-title, b');
        showToast(title ? title.textContent + ' — 点击查看详情' : '查看任务详情');
      });
    });

    // 时间轴任务条
    document.querySelectorAll('.tl-rbar, .tl-bar').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('click', function(e){
        if(e.target.closest('.cb') || e.target.closest('.bardots') || e.target.closest('.menu-dots')) return;
        var title = this.querySelector('.barttl, .tl-bar-title');
        showToast(title ? title.textContent + ' — 点击查看详情' : '查看任务详情');
      });
    });

    // 待办事项
    document.querySelectorAll('.todo-item').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('click', function(e){
        if(e.target.closest('button')) return;
        var txt = this.querySelector('.todo-txt');
        showToast(txt ? txt.textContent : '查看待办详情');
      });
    });

    // "查看更多" / "See More" 链接
    document.querySelectorAll('.section-title-row .more, .task-card-head-more, [onclick*="toast"]').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      if(el.hasAttribute('onclick')) return;
      el.addEventListener('click', function(){
        showToast('查看更多内容');
      });
    });

    // 通知铃铛
    document.querySelectorAll('.notif-btn, .topbar-btn, .header-btn').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      if(el.hasAttribute('onclick')) return;
      el.addEventListener('click', function(){
        showToast('📬 3条新通知');
      });
    });

    // 头像
    document.querySelectorAll('.topbar-avatar, .avatar-btn, .header-avatar').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      if(el.hasAttribute('onclick')) return;
      el.addEventListener('click', function(){
        showToast('👤 个人中心');
      });
    });

    // 统计卡片
    document.querySelectorAll('.stat-card, .stat-card-dash, .stat-box').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('click', function(){
        var lbl = this.querySelector('.sc-lbl, .lbl, .sl');
        showToast(lbl ? lbl.textContent + ' — 查看详细数据' : '查看详细数据');
      });
    });

    // 升级按钮
    document.querySelectorAll('.btn-white-pill, .sidebar-upgrade-btn').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      if(el.hasAttribute('onclick')) return;
      el.addEventListener('click', function(){
        showToast('🎉 升级成功！', 's');
      });
    });

    // 添加任务按钮
    document.querySelectorAll('.btn-add-task, .btn-add-task-sm, .todo-add').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      if(el.hasAttribute('onclick')) return;
      el.addEventListener('click', function(){
        showToast('📝 新建任务', 's');
      });
    });

    // 复选框动画
    document.querySelectorAll('.check-cell, .cb').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('click', function(e){
        e.stopPropagation();
        this.classList.toggle('checked');
        this.classList.toggle('on');
        if(this.classList.contains('checked') || this.classList.contains('on')){
          this.textContent = '✓';
        } else {
          this.textContent = this.classList.contains('check-cell') ? '☐' : '☐';
        }
      });
    });

    // 侧边栏导航项 hover 增强
    document.querySelectorAll('.nav-item').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('mouseenter', function(){
        if(!this.classList.contains('active')){
          this.style.transform = 'translateX(2px)';
        }
      });
      el.addEventListener('mouseleave', function(){
        this.style.transform = '';
      });
    });

    // 带教升级包卡片 hover
    document.querySelectorAll('.sidebar-bottom').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      el.addEventListener('mouseenter', function(){
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 8px 24px rgba(44,197,111,0.3)';
        this.style.transition = 'all 0.3s cubic-bezier(0.4,0,0.2,1)';
      });
      el.addEventListener('mouseleave', function(){
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });

    // 培养页面分类标签
    document.querySelectorAll('[style*="border-bottom:2px solid #3dcbb1"]').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      var siblings = el.parentElement.querySelectorAll('span');
      el.addEventListener('click', function(){
        siblings.forEach(function(s){ s.style.borderBottom='none'; s.style.paddingBottom='12px'; s.style.marginBottom='-14px'; });
        this.style.borderBottom='2px solid #3dcbb1';
        this.style.paddingBottom='12px';
        this.style.marginBottom='-14px';
        showToast('已切换到：' + this.textContent.trim());
      });
    });

    // 搜索框交互
    document.querySelectorAll('.search-box input, .header-search input, .search-pill').forEach(function(el){
      if(el.hasAttribute('data-bound')) return;
      el.setAttribute('data-bound','1');
      if(el.tagName==='INPUT'){
        el.addEventListener('focus', function(){
          this.closest('.search-box, .header-search, .search-pill').style.boxShadow = '0 0 0 2px rgba(44,197,111,0.15)';
        });
        el.addEventListener('blur', function(){
          this.closest('.search-box, .header-search, .search-pill').style.boxShadow = '';
        });
      }
    });
  }

  // ===== 启动 =====
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', initInteractions);
  } else {
    initInteractions();
  }

  // 初始动画
  window.addEventListener('load', function(){
    var active = document.querySelector('.page.active');
    if(active) reAnim(active);
    // 数字动画
    setTimeout(function(){
      document.querySelectorAll('.fit-fill').forEach(function(b){
        var w = b.dataset.w;
        if(w) b.style.width = w;
      });
    }, 300);
  });

})();
