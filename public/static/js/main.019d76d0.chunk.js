(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  15(e, t, n) {},
  16(e, t, n) {
    n.r(t); const a = n(0); const s = n(1); const i = n.n(s); const c = n(6); const o = n.n(c); const r = (n(15), n(9)); const u = n(2); const l = `${n.p}static/media/logo.c2821b38.svg`; const p = function () { return Object(a.jsx)('header', { className: 'header page__sections', children: Object(a.jsx)('img', { src: l, alt: 'Mesto Russia', className: 'header__logo' }) }); }; const d = i.a.createContext(); const _ = function (e) {
      const t = e.card; const n = e.onCardClick; const s = e.onCardLike; const c = e.onCardDelete; const o = i.a.useContext(d); const r = t.owner._id === o._id; const u = 'button elements__trash '.concat(r ? 'elements__trash_active' : ''); const l = t.likes.some(((e) => e._id === o._id)); const p = 'button elements__like '.concat(l ? 'elements__like_active' : ''); return Object(a.jsxs)('li', {
        className: 'elements__item',
        children: [Object(a.jsx)('button', {
          type: 'button', className: u, onClick() { c(t); }, children: ' ',
        }), Object(a.jsx)('img', {
          src: t.link, alt: t.name, className: 'elements__img', onClick() { n(t); },
        }), Object(a.jsxs)('div', { className: 'elements__label', children: [Object(a.jsx)('h2', { className: 'elements__title', children: t.name }), Object(a.jsxs)('div', { className: 'elements__likes', children: [Object(a.jsx)('button', { type: 'button', className: p, onClick() { s(t); } }), Object(a.jsx)('div', { className: 'elements__like-count', children: '0' })] })] })],
      });
    }; const j = function (e) {
      const t = e.onEditProfile; const n = e.onAddPlace; const s = e.onEditAvatar; const c = e.onCardClick; const o = e.onCardLike; const r = e.onCardDelete; const u = e.cards; const l = i.a.useContext(d); return Object(a.jsxs)('main', {
        children: [Object(a.jsxs)('section', { className: 'profile page__sections', children: [Object(a.jsx)('img', { src: l.avatar, alt: l.name, className: 'profile__avatar' }), Object(a.jsx)('button', { type: 'button', className: 'button profile__avatar_edit', onClick: s }), Object(a.jsxs)('div', { className: 'profile__info', children: [Object(a.jsxs)('h1', { className: 'profile__title', children: [l.name, ' '] }), Object(a.jsx)('button', { type: 'button', className: 'button profile__edit', onClick: t }), Object(a.jsx)('p', { className: 'profile__text', children: l.about })] }), Object(a.jsx)('button', { type: 'button', className: 'button profile__add', onClick: n })] }), Object(a.jsx)('section', {
          className: 'cards page__sections',
          children: Object(a.jsx)('ul', {
            className: 'cards__items',
            children: u.map(((e) => Object(a.jsx)(_, {
              card: e, onCardClick: c, onCardLike: o, onCardDelete: r,
            }, e._id))),
          }),
        })],
      });
    }; const h = function () { return Object(a.jsx)('footer', { className: 'footer page__sections', children: Object(a.jsx)('p', { className: 'footer__text', children: ' \xa9 2020 Mesto Russia' }) }); }; const m = function (e) { const t = e.card; const n = e.isOpen; const s = e.onClose; return Object(a.jsx)(a.Fragment, { children: Object(a.jsx)('div', { className: 'popup popup_type_layout '.concat(n ? 'popup_opened' : ''), children: Object(a.jsxs)('div', { className: 'popup__container popup__container_layout', children: [Object(a.jsx)('button', { type: 'button', className: 'button popup__close', onClick: s }), Object(a.jsx)('img', { src: t.link, alt: t.name, className: 'popup__img' }), Object(a.jsx)('h2', { className: 'popup__title popup__title_layout', children: t.name })] }) }) }); }; const b = function (e) {
      const t = e.name; const n = e.title; const s = e.buttonText; const i = e.children; const c = e.isOpen; const o = e.onClose; const r = e.onSubmit; const u = e.isLoading; return Object(a.jsx)(a.Fragment, {
        children: Object(a.jsx)('div', {
          className: 'popup popup_type_'.concat(t, ' ').concat(c ? 'popup_opened' : ''),
          children: Object(a.jsxs)('div', {
            className: 'popup__container',
            children: [Object(a.jsx)('button', { type: 'button', className: 'button popup__close', onClick: o }), Object(a.jsxs)('form', {
              onSubmit: r, name: t, action: '#', method: 'post', className: 'popup__form', noValidate: !0, children: [Object(a.jsx)('h3', { className: 'popup__title', children: n }), i, Object(a.jsxs)('button', { type: 'submit', className: 'button popup__save', children: [u ? '\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...' : s, ' '] })],
            })],
          }),
        }),
      });
    }; const f = function (e) {
      const t = e.isOpen; const n = e.onClose; const s = e.onUpdateUser; const i = e.isLoading; const c = e.name; const o = e.description; const r = e.onNameChange; const u = e.onDescriptionChange; return Object(a.jsxs)(b, {
        name: 'profile',
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        buttonText: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        isOpen: t,
        onClose: n,
        onSubmit(e) { e.preventDefault(), s({ name: c, about: o }); },
        isLoading: i,
        children: [Object(a.jsx)('input', {
          id: 'input-name', type: 'text', name: 'name', value: c || '', placeholder: '\u0418\u043c\u044f', className: 'popup__input popup__input_subject_name', required: !0, minLength: '2', maxLength: '40', onChange: r,
        }), Object(a.jsx)('span', { id: 'input-name-error', className: 'popup__input-error' }), Object(a.jsx)('input', {
          id: 'input-job', type: 'text', name: 'about', value: o || '', placeholder: '\u041e \u0441\u0435\u0431\u0435', className: 'popup__input popup__input_subject_job', required: !0, minLength: '2', maxLength: '200', onChange: u,
        }), Object(a.jsx)('span', { id: 'input-job-error', className: 'popup__input-error' })],
      });
    }; const O = function (e) {
      const t = e.isOpen; const n = e.onClose; const s = e.onUpdateAvatar; const c = e.isLoading; const o = i.a.useRef(); return Object(a.jsxs)(b, {
        name: 'avatar',
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        buttonText: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        isOpen: t,
        onClose: n,
        onSubmit(e) { e.preventDefault(), s({ avatar: o.current.value }), e.target.reset(); },
        isLoading: c,
        children: [Object(a.jsx)('input', {
          ref: o, id: 'input-link', type: 'url', name: 'link', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', className: 'popup__input popup__input_subject_pic-link', required: !0,
        }), Object(a.jsx)('span', { id: 'input-link-error', className: 'popup__input-error' })],
      });
    }; const x = function (e) {
      const t = e.isOpen; const n = e.onClose; const s = e.onAddPlace; const i = e.isLoading; const c = e.onTitleChange; const o = e.onLinkChange; const r = e.name; const u = e.link; return Object(a.jsx)(b, {
        name: 'element',
        title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
        buttonText: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c',
        isOpen: t,
        onClose: n,
        onSubmit(e) { e.preventDefault(), s({ name: r, link: u }), e.target.reset(); },
        isLoading: i,
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsx)('input', {
            id: 'input-name', type: 'text', name: 'name', value: r || '', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', className: 'popup__input popup__input_subject_pictitle', required: !0, minLength: '1', maxLength: '30', onChange: c,
          }), Object(a.jsx)('span', { id: 'input-name-error', className: 'popup__input-error' }), Object(a.jsx)('input', {
            id: 'input-link', type: 'url', name: 'link', value: u || '', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', className: 'popup__input popup__input_subject_pic-link', required: !0, onChange: o,
          }), Object(a.jsx)('span', { id: 'input-link-error', className: 'popup__input-error' })],
        }),
      });
    }; const v = n(7); const g = n(8); const C = new (function () { function e(t) { const n = t.url; const a = t.headers; Object(v.a)(this, e), this._url = n, this._headers = a; } return Object(g.a)(e, [{ key: '_parsAnswer', value(e) { return e.ok ? e.json() : Promise.reject(new Error('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status))); } }, { key: 'getUserInfo', value() { return fetch(''.concat(this._url, '/users/me'), { headers: this._headers }).then(this._parsAnswer); } }, { key: 'getInitialCards', value() { return fetch(''.concat(this._url, '/cards'), { headers: this._headers }).then(this._parsAnswer); } }, { key: 'getAllInfo', value() { return Promise.all([this.getInitialCards(), this.getUserInfo()]); } }, { key: 'editUserInfo', value(e) { return fetch(''.concat(this._url, '/users/me'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ name: e.name, about: e.about }) }).then(this._parsAnswer); } }, { key: 'addCard', value(e) { return fetch(''.concat(this._url, '/cards'), { method: 'POST', headers: this._headers, body: JSON.stringify({ name: e.name, link: e.link }) }).then(this._parsAnswer); } }, { key: 'deleteCard', value(e) { return fetch(''.concat(this._url, '/cards/').concat(e), { method: 'DELETE', headers: this._headers }).then(this._parsAnswer); } }, { key: 'changeLikeCardStatus', value(e, t) { return fetch(''.concat(this._url, '/cards/likes/').concat(e), { method: ''.concat(t ? 'PUT' : 'DELETE'), headers: this._headers }).then(this._parsAnswer); } }, { key: 'editAvatar', value(e) { return fetch(''.concat(this._url, '/users/me/avatar'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ avatar: e.avatar }) }).then(this._parsAnswer); } }]), e; }())({ url: 'https://mesto.nomoreparties.co/v1/cohort-16', headers: { authorization: '5e818745-1601-43fc-b5f2-fedadb1bc162', 'Content-Type': 'application/json' } }); const k = function () {
      const e = i.a.useState({}); const t = Object(u.a)(e, 2); const n = t[0]; const s = t[1]; const c = i.a.useState([]); const o = Object(u.a)(c, 2); const l = o[0]; const _ = o[1]; const b = i.a.useState(''); const v = Object(u.a)(b, 2); const g = v[0]; const k = v[1]; const N = i.a.useState(''); const y = Object(u.a)(N, 2); const L = y[0]; const S = y[1]; const A = i.a.useState(''); const E = Object(u.a)(A, 2); const w = E[0]; const P = E[1]; const T = i.a.useState(''); const D = Object(u.a)(T, 2); const U = D[0]; const I = D[1]; const q = i.a.useState(!1); const J = Object(u.a)(q, 2); const F = J[0]; const M = J[1]; const R = i.a.useState(!1); const H = Object(u.a)(R, 2); const z = H[0]; const B = H[1]; const V = i.a.useState(!1); const G = Object(u.a)(V, 2); const K = G[0]; const Q = G[1]; const W = i.a.useState(!1); const X = Object(u.a)(W, 2); const Y = X[0]; const Z = X[1]; const $ = i.a.useState({}); const ee = Object(u.a)($, 2); const te = ee[0]; const ne = ee[1]; const ae = i.a.useState(!1); const se = Object(u.a)(ae, 2); const ie = se[0]; const ce = se[1]; function oe() { Q(!1), M(!1), B(!1), Z(!1), ne({}); } return i.a.useEffect((() => { C.getAllInfo().then(((e) => { const t = e[0]; const n = e[1]; s(n), _(t); })).catch(((e) => { console.log(e); })); }), []), i.a.useEffect((() => { k(n.name), S(n.about); }), [n]), i.a.useEffect((() => { P(''), I(''); }), []), Object(a.jsx)(d.Provider, {
        value: n,
        children: Object(a.jsxs)('div', {
          className: 'App',
          children: [Object(a.jsx)(p, {}), Object(a.jsx)(j, {
            onEditProfile() { M(!0); }, onAddPlace() { B(!0); }, onEditAvatar() { Q(!0); }, onCardClick(e) { Z(!0), ne({ link: e.link, name: e.name, alt: e.name }); }, onCardLike(e) { const t = e.likes.some(((e) => e._id === n._id)); C.changeLikeCardStatus(e._id, !t).then(((t) => { const n = l.map(((n) => (n._id === e._id ? t : n))); _(n); })).catch(((e) => { console.log(e); })); }, onCardDelete(e) { C.deleteCard(e._id).then(((t) => { const n = l.filter(((n) => (n._id !== e._id ? t : ''))); _(n); })).catch(((e) => { console.log(e); })); }, cards: l,
          }), Object(a.jsx)(h, {}), Object(a.jsx)(f, {
            isOpen: F, onClose: oe, onUpdateUser(e) { ce(!0), C.editUserInfo(e).then(((e) => { s(e), oe(); })).catch(((e) => { console.log(e); })).finally((() => { ce(!1); })); }, isLoading: ie, onNameChange(e) { k(e.target.value); }, onDescriptionChange(e) { S(e.target.value); }, name: g, description: L,
          }), Object(a.jsx)(O, {
            isOpen: K, onClose: oe, onUpdateAvatar(e) { ce(!0), C.editAvatar(e).then(((e) => { s(e), oe(); })).catch(((e) => { console.log(e); })).finally((() => { ce(!1); })); }, isLoading: ie,
          }), Object(a.jsx)(x, {
            isOpen: z, onClose: oe, onAddPlace(e) { ce(!0), C.addCard(e).then(((e) => { _([e].concat(Object(r.a)(l))), oe(); })).catch(((e) => { console.log(e); })).finally((() => { ce(!1); })); }, isLoading: ie, onTitleChange(e) { P(e.target.value); }, onLinkChange(e) { I(e.target.value); }, name: w, link: U,
          }), Object(a.jsx)(m, { card: te, isOpen: Y, onClose: oe })],
        }),
      });
    }; o.a.render(Object(a.jsx)(i.a.StrictMode, { children: Object(a.jsx)(k, {}) }), document.getElementById('root'));
  },
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.019d76d0.chunk.js.map
