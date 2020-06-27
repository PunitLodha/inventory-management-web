(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    118: function(e, t, a) {
      e.exports = a.p + 'static/media/Login.b498e69b.svg';
    },
    146: function(e, t, a) {
      e.exports = a.p + 'static/media/Graph.fa22f606.svg';
    },
    149: function(e, t, a) {
      e.exports = a.p + 'static/media/PageNotFound.40eebd6e.svg';
    },
    150: function(e, t, a) {
      e.exports = a.p + 'static/media/Authentication.92768638.svg';
    },
    215: function(e, t, a) {
      e.exports = a(245);
    },
    220: function(e, t, a) {},
    238: function(e, t, a) {},
    245: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(16),
        i = a.n(l),
        o = (a(220), a(55)),
        c = a.n(o),
        s = (a(238), a(151)),
        u = a(325),
        m = a(326),
        p = a(54),
        d = a(7),
        f = a(21),
        g = a(22),
        b = a(9),
        h = a.n(b),
        v = a(14),
        E = a(297),
        x = a(19),
        y = a(298),
        O = a(299),
        j = a(300),
        w = a(333),
        k = a(301),
        S = a(302),
        C = a(57),
        N = a(296),
        P = a(102),
        T = a.n(P),
        L = a(100),
        D = a.n(L),
        I = a(290),
        R = a(295),
        W = a(293),
        _ = a(294),
        q = a(292);
      function A(e) {
        var t = e.open,
          a = e.number,
          n = e.handleClose,
          l = e.selectedRow,
          i = e.handleDelete,
          o = e.handleClick,
          c = '',
          s = '';
        '1' === a
          ? ((c = 'Delete '.concat(l.name, '?')),
            (s = 'Are you sure you want to delete '.concat(l.name, '?')))
          : '2' === a &&
            ((c = 'Are you sure you wish to logout?'),
            (s = 'If you Agree, you will be logged out from all devices...'));
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            I.a,
            {
              open: t,
              onClose: n,
              'aria-labelledby': 'alert-dialog-title',
              'aria-describedby': 'alert-dialog-description',
            },
            r.a.createElement(q.a, { id: 'alert-dialog-title' }, c),
            r.a.createElement(
              W.a,
              null,
              r.a.createElement(_.a, { id: 'alert-dialog-description' }, s)
            ),
            r.a.createElement(
              R.a,
              null,
              r.a.createElement(
                N.a,
                { onClick: n, color: 'primary' },
                'Disagree'
              ),
              r.a.createElement(
                N.a,
                {
                  onClick: function() {
                    '1' === a ? (i(l), n()) : '2' === a && o();
                  },
                  color: 'secondary',
                  autoFocus: !0,
                },
                'Agree'
              )
            )
          )
        );
      }
      function B(e, t, a) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = Object(v.a)(
          h.a.mark(function e(t, a, n) {
            var r;
            return h.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      c.a.get(t, a).catch(function(e) {
                        return (
                          401 === e.response.status && n.push('/unauthorized'),
                          Promise.reject(e)
                        );
                      })
                    );
                  case 2:
                    if (null == (r = e.sent)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt('return', r);
                  case 5:
                    return e.abrupt('return', []);
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function z(e, t, a, n) {
        return M.apply(this, arguments);
      }
      function M() {
        return (M = Object(v.a)(
          h.a.mark(function e(t, a, n, r) {
            var l;
            return h.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      c.a.post(t, a, n).catch(function(e) {
                        return (
                          401 === e.response.status && r.push('/unauthorized'),
                          Promise.reject(e)
                        );
                      })
                    );
                  case 2:
                    if (null == (l = e.sent)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt('return', l);
                  case 5:
                    return e.abrupt('return', []);
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      A.defaultProps = {
        handleDelete: null,
        handleClick: null,
        selectedRow: null,
      };
      var H = Object(n.createContext)(),
        U = function(e) {
          var t = e.children,
            a = Object(n.useState)(0),
            l = Object(d.a)(a, 2),
            i = l[0],
            o = l[1],
            c = Object(n.useState)(!0),
            s = Object(d.a)(c, 2),
            u = s[0],
            m = s[1];
          return r.a.createElement(
            H.Provider,
            {
              value: {
                expiryListBadge: i,
                setExpiryListBadge: o,
                update: u,
                setUpdate: m,
              },
            },
            t
          );
        },
        V = Object(E.a)(function(e) {
          return {
            root: { flexGrow: 1 },
            menuButton: {
              display: function(e) {
                return e ? 'block' : 'none';
              },
              marginRight: e.spacing(2),
            },
            title: { flexGrow: 1 },
            button: {
              textDecoration: 'none',
              textTransform: 'capitalize',
              fontSize: '1rem',
            },
            tabBadge: {
              '& .MuiBadge-badge': {
                right: '-10%',
                color: 'black',
                backgroundColor: '#f2c94c',
              },
            },
          };
        }),
        G = function(e) {
          var t = e.mobileOpen,
            a = e.setMobileOpen,
            l = e.tabletOpen,
            i = e.setTabletOpen,
            o = Object(g.h)(),
            c = Object(x.a)(),
            s = Object(y.a)(c.breakpoints.only('sm')),
            u = Object(y.a)(c.breakpoints.only('xs')),
            m = '/login' !== o.pathname,
            p = V(m),
            d = Object(n.useContext)(H).expiryListBadge;
          return r.a.createElement(
            'div',
            { className: p.root },
            r.a.createElement(
              O.a,
              { position: 'fixed' },
              r.a.createElement(
                j.a,
                null,
                r.a.createElement(
                  w.a,
                  { mdUp: !0 },
                  r.a.createElement(
                    k.a,
                    {
                      edge: 'start',
                      className: p.menuButton,
                      color: 'inherit',
                      onClick: function() {
                        s ? i(!l) : a(!t);
                      },
                    },
                    l
                      ? r.a.createElement(D.a, null)
                      : r.a.createElement(
                          S.a,
                          {
                            badgeContent: d,
                            color: 'primary',
                            overlap: 'circle',
                            className: p.tabBadge,
                            invisible: !u,
                          },
                          r.a.createElement(T.a, null)
                        )
                  )
                ),
                r.a.createElement(
                  C.a,
                  { variant: 'h6', className: p.title },
                  'Inventory Management Web App'
                ),
                r.a.createElement(Z, null)
              )
            )
          );
        };
      function Z() {
        var e = r.a.useState(!1),
          t = Object(d.a)(e, 2),
          a = t[0],
          n = t[1],
          l = Object(g.h)(),
          i = Object(g.g)(),
          o = '/login' !== l.pathname,
          c = (function() {
            var e = Object(v.a)(
              h.a.mark(function e() {
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!o) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.prev = 1),
                            '',
                            (e.next = 5),
                            z('/auth/token/logout', '', null, i)
                          );
                        case 5:
                          localStorage.removeItem('token'),
                            localStorage.removeItem('isStaff'),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 12:
                          i.push('/login'), n(!1);
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })();
        return r.a.createElement(
          'div',
          null,
          o
            ? r.a.createElement(
                r.a.Fragment,
                null,
                ' ',
                r.a.createElement(
                  N.a,
                  {
                    color: 'inherit',
                    onClick: function() {
                      n(!0);
                    },
                  },
                  o ? 'Logout' : 'Login'
                ),
                r.a.createElement(A, {
                  open: a,
                  handleClose: function() {
                    n(!1);
                  },
                  handleClick: c,
                  number: '2',
                })
              )
            : null
        );
      }
      var K = a(6),
        Q = a(153),
        $ = a(334),
        J = a(309),
        Y = a(75),
        X = a.n(Y),
        ee = a(76),
        te = a.n(ee),
        ae = a(118),
        ne = a.n(ae),
        re = a(15),
        le = function() {
          var e = Object(n.useState)({ email: '', password: '' }),
            t = Object(d.a)(e, 2),
            a = t[0],
            r = t[1],
            l = Object(n.useState)(!1),
            i = Object(d.a)(l, 2),
            o = i[0],
            c = i[1],
            s = Object(n.useState)({ errors: !1, email: ' ', password: ' ' }),
            u = Object(d.a)(s, 2),
            m = u[0],
            p = u[1],
            f = Object(n.useState)(!1),
            b = Object(d.a)(f, 2),
            E = b[0],
            x = b[1],
            y = Object(n.useState)(!1),
            O = Object(d.a)(y, 2),
            j = O[0],
            w = O[1],
            k = Object(n.useState)(!1),
            S = Object(d.a)(k, 2),
            C = S[0],
            N = S[1],
            P = Object(g.g)(),
            T = (function() {
              var e = Object(v.a)(
                h.a.mark(function e(t) {
                  var a, n, r;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              N(!0),
                              (e.next = 4),
                              z('/auth/token/login/', t, null, P)
                            );
                          case 4:
                            return (
                              (a = e.sent),
                              (n = a.data),
                              localStorage.setItem('token', n.auth_token),
                              (e.next = 9),
                              B('/auth/users/me/', null, P)
                            );
                          case 9:
                            (r = e.sent),
                              localStorage.setItem('isStaff', r.data.is_staff),
                              N(!1),
                              P.push('/'),
                              (e.next = 19);
                            break;
                          case 15:
                            (e.prev = 15), (e.t0 = e.catch(0)), N(!1), x(!0);
                          case 19:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 15]]
                  );
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function() {
              if (!m.errors && j) {
                var e = new FormData();
                e.append('email', a.email),
                  e.append('password', a.password),
                  T(e),
                  w(!1),
                  r(function(e) {
                    return Object(re.a)(
                      Object(re.a)({}, e),
                      {},
                      { email: '', password: '' }
                    );
                  });
              }
            },
            [m, j]
          );
          return {
            handleChange: function(e) {
              e.persist(),
                r(function(t) {
                  return Object(re.a)(
                    Object(re.a)({}, t),
                    {},
                    Object(K.a)({}, e.target.name, e.target.value)
                  );
                });
            },
            handleSubmit: function(e) {
              e && e.preventDefault(),
                p(
                  (function(e) {
                    var t = !1,
                      a = ' ',
                      n = ' ';
                    return (
                      '' === e.email
                        ? ((t = !0), (n = 'Please fill out this field'))
                        : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            e.email
                          ) || ((t = !0), (n = 'Please enter a valid email')),
                      '' === e.password
                        ? ((t = !0), (a = 'Please fill out this field'))
                        : e.password.length < 5 &&
                          ((t = !0),
                          (a = 'Password should have more than 5 characters')),
                      { errors: t, email: n, password: a }
                    );
                  })(a)
                ),
                w(!0);
            },
            error: m,
            isInvalidCred: E,
            values: a,
            showPassword: o,
            toggleShowPassword: function() {
              c(function(e) {
                return !e;
              });
            },
            isLoading: C,
          };
        },
        ie = a(248),
        oe = a(303),
        ce = Object(E.a)(function(e) {
          return { backdrop: { zIndex: e.zIndex.drawer + 1, color: '#fff' } };
        });
      function se() {
        var e = ce();
        return r.a.createElement(
          ie.a,
          { className: e.backdrop, open: !0 },
          r.a.createElement(oe.a, { color: 'inherit' })
        );
      }
      var ue = Object(E.a)(function(e) {
          var t;
          return {
            root: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
            },
            formContainer: {
              flex: '1 1 30rem',
              height: '26rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            form:
              ((t = {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: e.spacing(2),
                padding: e.spacing(0, 5),
              }),
              Object(K.a)(t, e.breakpoints.down('sm'), {
                padding: e.spacing(0, 2),
              }),
              Object(K.a)(
                t,
                '& .MuiTextField-root',
                Object(K.a)(
                  { marginTop: e.spacing(1), width: '100%', maxWidth: '20rem' },
                  e.breakpoints.down('xs'),
                  { maxWidth: '15rem' }
                )
              ),
              t),
            paper: Object(K.a)(
              {
                maxWidth: '70rem',
                height: '35rem',
                margin: e.spacing(2),
                marginTop: '6rem',
                padding: e.spacing(2),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
                overflow: 'hidden',
              },
              e.breakpoints.down('xs'),
              { width: '30rem', height: '38rem', alignItems: 'flex-start' }
            ),
            img: Object(K.a)(
              { flex: '1 1 35rem', maxWidth: '50%', marginRight: e.spacing(2) },
              e.breakpoints.down('xs'),
              { width: '15rem', marginBottom: e.spacing(2) }
            ),
            heading: { fontWeight: '700', marginBottom: e.spacing(4) },
            button: Object(K.a)(
              {
                width: '100%',
                maxWidth: '18rem',
                height: '3rem',
                borderRadius: '2rem',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginTop: e.spacing(1.5),
                textTransform: 'capitalize',
                boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
              },
              e.breakpoints.down('xs'),
              { maxWidth: '12rem' }
            ),
            invalid: {
              display: function(e) {
                return e.invalid ? 'block' : 'none';
              },
            },
          };
        }),
        me = function() {
          var e = le(),
            t = e.handleChange,
            a = e.handleSubmit,
            n = e.error,
            l = e.isInvalidCred,
            i = e.values,
            o = e.showPassword,
            c = e.toggleShowPassword,
            s = e.isLoading,
            u = ue({ invalid: l });
          return r.a.createElement(
            r.a.Fragment,
            null,
            s ? r.a.createElement(se, null) : null,
            r.a.createElement(
              'div',
              { className: u.root },
              r.a.createElement(
                Q.a,
                { className: u.paper },
                r.a.createElement(
                  w.a,
                  { xsDown: !0 },
                  r.a.createElement('img', {
                    src: ne.a,
                    alt: 'Login illustration',
                    className: u.img,
                  })
                ),
                r.a.createElement(
                  'div',
                  { className: u.formContainer },
                  r.a.createElement(
                    C.a,
                    { variant: 'h3', className: u.heading },
                    'Login'
                  ),
                  r.a.createElement(
                    w.a,
                    { smUp: !0 },
                    r.a.createElement('img', {
                      src: ne.a,
                      alt: 'Login illustration',
                      className: u.img,
                    })
                  ),
                  r.a.createElement(
                    C.a,
                    { variant: 'h6', color: 'error', className: u.invalid },
                    'Invalid email or password. Please try again'
                  ),
                  r.a.createElement(
                    'form',
                    {
                      noValidate: !0,
                      onSubmit: a,
                      autoComplete: 'off',
                      className: u.form,
                    },
                    r.a.createElement($.a, {
                      required: !0,
                      variant: 'filled',
                      id: 'email-input',
                      name: 'email',
                      type: 'email',
                      label: 'Email',
                      value: i.email,
                      onChange: t,
                      error: !(' ' === n.email),
                      helperText: n.email,
                    }),
                    r.a.createElement($.a, {
                      required: !0,
                      variant: 'filled',
                      id: 'password-input',
                      name: 'password',
                      type: o ? 'text' : 'password',
                      label: 'Password',
                      value: i.password,
                      onChange: t,
                      error: !(' ' === n.password),
                      helperText: n.password,
                      InputProps: {
                        endAdornment: r.a.createElement(
                          J.a,
                          { position: 'end' },
                          r.a.createElement(
                            k.a,
                            { onClick: c, tabIndex: '-1' },
                            o
                              ? r.a.createElement(X.a, null)
                              : r.a.createElement(te.a, null)
                          )
                        ),
                      },
                    }),
                    r.a.createElement(
                      N.a,
                      {
                        type: 'submit',
                        color: 'primary',
                        variant: 'contained',
                        className: u.button,
                        'data-testid': 'submit',
                      },
                      'Login'
                    )
                  )
                )
              )
            )
          );
        },
        pe = a(308),
        de = a(250),
        fe = a(310),
        ge = a(311),
        be = a(337),
        he = a(141),
        ve = a.n(he),
        Ee = a(143),
        xe = a.n(Ee),
        ye = a(144),
        Oe = a.n(ye),
        je = a(142),
        we = a.n(je),
        ke = Object(E.a)(function(e) {
          return {
            drawer: Object(K.a)({}, e.breakpoints.up('sm'), {
              width: 230,
              flexShrink: 0,
            }),
            menuButton: Object(K.a)(
              { marginRight: e.spacing(2) },
              e.breakpoints.up('sm'),
              { display: 'none' }
            ),
            drawerPaper: Object(K.a)(
              { width: 230, zIndex: 0 },
              e.breakpoints.only('sm'),
              {
                width: function(e) {
                  return e.tab ? 230 : '4.5rem';
                },
                overflowX: 'hidden',
              }
            ),
            content: { flexGrow: 1, padding: e.spacing(3) },
            link: { textDecoration: 'none' },
            icons: { fontSize: '2rem', color: e.palette.primary.light },
            listIcon: Object(K.a)(
              {
                minWidth: '2rem',
                marginRight: e.spacing(2),
                marginLeft: e.spacing(1),
              },
              e.breakpoints.only('sm'),
              {
                marginRight: function(t) {
                  return t.tab ? e.spacing(2) : e.spacing(3);
                },
                marginLeft: function(t) {
                  return t.tab ? e.spacing(1) : e.spacing(0.5);
                },
              }
            ),
            listText: {
              paddingTop: e.spacing(0.5),
              '& .MuiTypography-body1': {
                fontSize: '1.25rem',
                color: e.text.color.veryDark,
              },
            },
            drawerHeader: Object(re.a)(
              Object(re.a)(
                {
                  display: 'flex',
                  alignItems: 'center',
                  padding: e.spacing(0, 1),
                },
                e.mixins.toolbar
              ),
              {},
              { justifyContent: 'flex-end' }
            ),
            toolbar: e.mixins.toolbar,
            badge: {
              '& .MuiBadge-badge': {
                top: '55%',
                right: '-15%',
                color: 'black',
                backgroundColor: '#f2c94c',
              },
            },
            tabBadge: {
              '& .MuiBadge-badge': {
                right: '-10%',
                color: 'black',
                backgroundColor: '#f2c94c',
              },
            },
          };
        });
      var Se = function(e) {
          var t = e.mobileOpen,
            a = e.setMobileOpen,
            l = e.tabletOpen,
            i = ke({ tab: l }),
            o = Object(x.a)(),
            c = Object(y.a)(o.breakpoints.only('sm')),
            s = Object(n.useState)({
              links: ['/', '/inventory', '/transaction'],
              labels: ['Home', 'Inventory', 'Transactions'],
            }),
            u = Object(d.a)(s, 2),
            m = u[0],
            p = u[1],
            b = function() {
              a(!t);
            },
            E = [
              r.a.createElement(ve.a, { className: i.icons }),
              r.a.createElement(we.a, { className: i.icons }),
              r.a.createElement(xe.a, { className: i.icons }),
              r.a.createElement(Oe.a, { className: i.icons }),
            ];
          Object(n.useEffect)(function() {
            'true' === localStorage.getItem('isStaff') &&
              p({
                labels: ['Home', 'Inventory', 'Employees', 'Transactions'],
                links: ['/', '/inventory', '/employee', '/transaction'],
              });
          }, []);
          var O = Object(n.useContext)(H),
            j = O.expiryListBadge,
            C = O.setExpiryListBadge,
            N = O.update,
            P = Object(g.g)(),
            T = (function() {
              var e = Object(v.a)(
                h.a.mark(function e() {
                  var t, a;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              B('/api/explist/', null, P)
                            );
                          case 3:
                            (t = e.sent),
                              (a = t.data),
                              C(a.count),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]]
                  );
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function() {
              T();
            },
            [N]
          );
          var L = r.a.createElement(
            'div',
            null,
            r.a.createElement(
              pe.a,
              null,
              m.labels.map(function(e, t) {
                return r.a.createElement(
                  f.b,
                  { to: m.links[t], className: i.link, key: e, onClick: b },
                  r.a.createElement(
                    de.a,
                    { button: !0, key: e },
                    r.a.createElement(
                      fe.a,
                      { className: i.listIcon },
                      r.a.createElement(
                        S.a,
                        {
                          badgeContent: j,
                          color: 'primary',
                          overlap: 'circle',
                          className: i.tabBadge,
                          invisible: !('Inventory' === e && !l && c),
                        },
                        E[t]
                      )
                    ),
                    r.a.createElement(
                      S.a,
                      {
                        badgeContent: j,
                        color: 'primary',
                        overlap: 'circle',
                        className: i.badge,
                        invisible: 'Inventory' !== e,
                      },
                      r.a.createElement(ge.a, {
                        primary: e,
                        className: i.listText,
                      })
                    )
                  )
                );
              })
            )
          );
          return r.a.createElement(
            'nav',
            { className: i.drawer },
            r.a.createElement(
              w.a,
              { smUp: !0 },
              r.a.createElement(
                be.a,
                {
                  variant: 'temporary',
                  open: t,
                  onClose: b,
                  classes: { paper: i.drawerPaper },
                  ModalProps: { keepMounted: !0 },
                },
                r.a.createElement(
                  'div',
                  { className: i.drawerHeader },
                  r.a.createElement(
                    k.a,
                    { onClick: b },
                    r.a.createElement(D.a, null)
                  )
                ),
                L
              )
            ),
            r.a.createElement(
              w.a,
              { xsDown: !0 },
              r.a.createElement(
                be.a,
                {
                  classes: { paper: i.drawerPaper },
                  variant: 'permanent',
                  open: !0,
                },
                r.a.createElement('div', { className: i.toolbar }),
                L
              )
            )
          );
        },
        Ce = a(314),
        Ne = a(17),
        Pe = a(313),
        Te = a(4),
        Le = a(312),
        De = Object(Te.a)(function(e) {
          return {
            tooltip: {
              backgroundColor: '#fff',
              color: 'rgba(0, 0, 0, 0.87)',
              width: 100,
              borderRadius: '0.5rem',
              boxShadow: '4px 4px 20px rgba(0,0,0,0.2)',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: '1px solid #dadde9',
              padding: '0.5rem',
              textAlign: 'center',
              '& h4': {
                fontSize: e.typography.pxToRem(12),
                fontWeight: 'normal',
                marginBottom: '2px',
              },
              '& *': { margin: '5px' },
            },
          };
        })(Le.a),
        Ie = function(e) {
          var t = e.children,
            a = e.title;
          return r.a.createElement(De, { title: a, placement: 'top' }, t);
        },
        Re = Object(E.a)(function(e) {
          var t;
          return {
            circle:
              ((t = { fill: '#64C6F7', stroke: 'white', strokeWidth: '3' }),
              Object(K.a)(t, e.breakpoints.only('xs'), { strokeWidth: '2' }),
              Object(K.a)(t, '&:hover', { fill: '#4796bd' }),
              t),
            svg: {
              '& #line': { fill: 'none', stroke: '#64C6F7', strokeWidth: '5' },
              '& #area': { fill: '#cceeff' },
              '& text': { fill: '#5a5a5a' },
            },
          };
        }),
        We = function(e) {
          var t = e.data,
            a = e.type,
            l = Re(),
            i = Object(x.a)(),
            o = Object(y.a)(i.breakpoints.only('xs')),
            c = Object(n.useRef)(null),
            s = Object(n.useRef)(null),
            u = Object(n.useRef)(null),
            m = o ? 600 : 1400,
            p = o ? 200 : 350,
            d = o ? 5 : 8,
            f = 20,
            g = 40,
            b = 80,
            h = 80;
          Object(n.useEffect)(
            function() {
              var e = 0,
                a = Ne.k()
                  .domain(
                    Ne.f(t, function(e) {
                      return e.date;
                    })
                  )
                  .range([h, m - g]),
                n = Ne.j()
                  .domain([
                    0,
                    Ne.h(t, function(e) {
                      return +e.value;
                    }),
                  ])
                  .nice()
                  .range([p - b, f]),
                r = Ne.g()
                  .x(function(e) {
                    return a(e.date);
                  })
                  .y(function(e) {
                    return n(e.value);
                  })
                  .curve(Ne.d),
                l = Ne.a()
                  .x(function(e) {
                    return a(e.date);
                  })
                  .y0(n(0))
                  .y1(function(e) {
                    return n(e.value);
                  })
                  .curve(Ne.d),
                i = Ne.l(c.current);
              i
                .select('#area')
                .datum(t)
                .attr('d', l),
                i
                  .select('#line')
                  .datum(t)
                  .attr('d', r);
              var o = Ne.l(c.current)
                .select('#line')
                .node()
                .getTotalLength();
              i
                .select('path')
                .attr('stroke-dasharray', ''.concat(o, ' ').concat(o))
                .attr('stroke-dashoffset', o)
                .transition()
                .duration(3e3)
                .ease(Ne.e)
                .attr('stroke-dashoffset', 0),
                i
                  .selectAll('circle')
                  .data(t)
                  .attr('cx', function(e) {
                    return a(e.date);
                  })
                  .attr('cy', function(e) {
                    return n(e.value);
                  })
                  .attr('r', d)
                  .attr('opacity', 0)
                  .transition()
                  .delay(function(r, l) {
                    if (0 === l) return 0;
                    var i = Math.sqrt(
                      Math.pow(a(t[l].date) - a(t[l - 1].date), 2) +
                        Math.pow(n(t[l].value) - n(t[l - 1].value), 2)
                    );
                    return (3e3 * (e += i)) / o;
                  })
                  .attr('opacity', 1),
                Ne.l(s.current)
                  .attr('transform', 'translate(0,'.concat(p - b, ')'))
                  .attr('color', '#5a5a5a')
                  .call(Ne.b(a).tickFormat(Ne.m('%b'))),
                Ne.l(u.current)
                  .attr('transform', 'translate('.concat(h, ',0)'))
                  .attr('color', '#5a5a5a')
                  .call(Ne.c(n));
            },
            [t, m]
          );
          var v = t.map(function(e) {
            return r.a.createElement(
              Ie,
              {
                title: r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    'h4',
                    null,
                    ''.concat(e.date.toDateString().slice(4))
                  ),
                  r.a.createElement(Pe.a, null),
                  r.a.createElement('p', null, ''.concat(e.value, 'K \u20b9'))
                ),
                key: e.date,
              },
              r.a.createElement('circle', { key: e.date, className: l.circle })
            );
          });
          return r.a.createElement(
            'svg',
            {
              viewBox: '0 0 '.concat(m, ' ').concat(p),
              width: o ? m : null,
              preserveAspectRatio: 'xMinYMin',
              ref: c,
              className: l.svg,
            },
            r.a.createElement('path', { id: 'line' }),
            r.a.createElement('path', { id: 'area' }),
            r.a.createElement('g', { ref: s }),
            r.a.createElement('g', { ref: u }),
            v,
            r.a.createElement(
              'text',
              {
                textAnchor: 'middle',
                transform: 'translate('.concat(m / 2, ',').concat(p - 20, ')'),
              },
              'Date'
            ),
            r.a.createElement(
              'text',
              {
                textAnchor: 'middle',
                transform: 'rotate(-90)',
                y: '30',
                x: 0 - p / 2 + b / 2,
              },
              ''.concat(a, ' (\u20b9)')
            )
          );
        },
        _e = Object(E.a)(function() {
          return {
            rect: { fill: '#64C6F7', '&:hover': { fill: '#4796bd' } },
            svg: { '& text': { fill: '#5a5a5a' } },
          };
        }),
        qe = function(e) {
          var t = e.data,
            a = e.type,
            l = _e(),
            i = Object(x.a)(),
            o = Object(y.a)(i.breakpoints.only('xs')),
            c = Object(n.useRef)(null),
            s = Object(n.useRef)(null),
            u = Object(n.useRef)(null),
            m = o ? 600 : 1400,
            p = o ? 200 : 350,
            d = 20,
            f = 40,
            g = 80,
            b = 80;
          Object(n.useEffect)(
            function() {
              var e = Ne.i()
                  .domain(
                    t.map(function(e) {
                      return e.name;
                    })
                  )
                  .range([b, m - f])
                  .padding(0.2),
                a = Ne.j()
                  .domain([
                    0,
                    Ne.h(t, function(e) {
                      return +e.value;
                    }),
                  ])
                  .nice()
                  .range([p - g, d]);
              Ne.l(c.current)
                .selectAll('rect')
                .data(t)
                .attr('x', function(t) {
                  return e(t.name);
                })
                .attr('y', a(0))
                .attr('width', e.bandwidth())
                .attr('height', p - a(0) - g)
                .transition()
                .duration(3e3)
                .attr('y', function(e) {
                  return a(e.value);
                })
                .attr('height', function(e) {
                  return p - a(e.value) - g;
                })
                .delay(function(e, t) {
                  return 100 * t;
                }),
                Ne.l(s.current)
                  .attr('transform', 'translate(0,'.concat(p - g, ')'))
                  .attr('color', '#5a5a5a')
                  .call(Ne.b(e)),
                Ne.l(u.current)
                  .attr('transform', 'translate('.concat(b, ',0)'))
                  .attr('color', '#5a5a5a')
                  .call(Ne.c(a).ticks(5));
            },
            [t, m]
          );
          var h = t.map(function(e) {
            return r.a.createElement(
              Ie,
              {
                title: r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement('h4', null, ''.concat(e.name)),
                  r.a.createElement(Pe.a, null),
                  r.a.createElement('p', null, ''.concat(e.value, 'K \u20b9'))
                ),
                key: e.name,
              },
              r.a.createElement('rect', {
                fill: 'steelblue',
                key: e.name,
                className: l.rect,
              })
            );
          });
          return r.a.createElement(
            'svg',
            {
              viewBox: '0 0 '.concat(m, ' ').concat(p),
              preserveAspectRatio: 'xMinYMin',
              width: o ? m : null,
              ref: c,
              className: l.svg,
            },
            r.a.createElement('g', { ref: s }),
            r.a.createElement('g', { ref: u }),
            h,
            r.a.createElement(
              'text',
              {
                textAnchor: 'middle',
                transform: 'translate('.concat(m / 2, ',').concat(p - 20, ')'),
              },
              'Product'
            ),
            r.a.createElement(
              'text',
              {
                textAnchor: 'middle',
                transform: 'rotate(-90)',
                y: '30',
                x: 0 - p / 2 + g / 2,
              },
              ''.concat(a, ' (\u20b9)')
            )
          );
        },
        Ae = a(146),
        Be = a.n(Ae),
        Fe = Object(E.a)(function(e) {
          return {
            container: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'calc(100vh - 10rem)',
              textAlign: 'center',
            },
            button: Object(K.a)(
              {
                maxWidth: '18rem',
                height: '3rem',
                borderRadius: '1rem',
                fontWeight: '700',
                marginTop: e.spacing(1.5),
                boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
              },
              e.breakpoints.down('xs'),
              { maxWidth: '12rem' }
            ),
            img: Object(K.a)(
              { maxWidth: '30%', marginBottom: e.spacing(4) },
              e.breakpoints.down('xs'),
              { maxWidth: '50%' }
            ),
          };
        }),
        ze = function(e) {
          var t = e.setData,
            a = Fe(),
            n = Object(g.g)();
          return r.a.createElement(
            'div',
            { className: a.container },
            r.a.createElement('img', {
              src: Be.a,
              alt: 'illustration',
              className: a.img,
            }),
            r.a.createElement('h1', null, 'More data needed to display graphs'),
            r.a.createElement(
              'h3',
              null,
              'Atleast 2 months data needed to display the graphs. Perform transactions to generate data'
            ),
            r.a.createElement(
              N.a,
              {
                type: 'button',
                color: 'primary',
                variant: 'contained',
                className: a.button,
                onClick: function() {
                  n.push('/transaction');
                },
              },
              'Transaction'
            ),
            r.a.createElement(
              N.a,
              {
                type: 'button',
                color: 'primary',
                variant: 'outlined',
                className: a.button,
                onClick: function() {
                  t({
                    Total: {
                      Total: { earned: 200, sold: 10, spent: 1e4, bought: 210 },
                      Munch: { earned: 50, spent: 200, sold: 5, bought: 20 },
                      Kitkat: { earned: 300, spent: 100, sold: 0, bought: 10 },
                      Lays: { earned: 150, spent: 600, sold: 5, bought: 40 },
                      Chips: { earned: 200, spent: 400, sold: 0, bought: 20 },
                      Milk: { earned: 900, spent: 700, sold: 0, bought: 120 },
                      Bag: { earned: 1500, spent: 700, sold: 0, bought: 120 },
                      Chocolate: {
                        earned: 300,
                        spent: 150,
                        sold: 0,
                        bought: 120,
                      },
                      Water: { earned: 200, spent: 100, sold: 0, bought: 120 },
                      Bread: { earned: 1e3, spent: 800, sold: 0, bought: 120 },
                    },
                    '2020-01': {
                      Total: { earned: 290, sold: 10, spent: 380, bought: 210 },
                    },
                    '2020-02': {
                      Total: { earned: 310, sold: 10, spent: 230, bought: 210 },
                    },
                    '2020-03': {
                      Total: { earned: 340, sold: 10, spent: 250, bought: 210 },
                    },
                    '2020-04': {
                      Total: { earned: 320, sold: 10, spent: 280, bought: 210 },
                    },
                    '2020-05': {
                      Total: { earned: 300, sold: 10, spent: 300, bought: 210 },
                    },
                    '2020-06': {
                      Total: { earned: 200, sold: 10, spent: 100, bought: 210 },
                    },
                    '2020-07': {
                      Total: { earned: 355, sold: 10, spent: 265, bought: 210 },
                    },
                    '2020-08': {
                      Total: { earned: 370, sold: 10, spent: 300, bought: 210 },
                    },
                    '2020-09': {
                      Total: { earned: 342, sold: 10, spent: 296, bought: 210 },
                    },
                    '2020-10': {
                      Total: { earned: 321, sold: 10, spent: 257, bought: 210 },
                    },
                    '2020-11': {
                      Total: { earned: 361, sold: 10, spent: 285, bought: 210 },
                    },
                    '2020-12': {
                      Total: { earned: 398, sold: 10, spent: 302, bought: 210 },
                    },
                  });
                },
              },
              'View with Dummy Data'
            )
          );
        },
        Me = Object(E.a)(function(e) {
          var t, a;
          return {
            heading: { fontWeight: 700, marginBottom: e.spacing(2) },
            graph: { marginBottom: e.spacing(4) },
            graphContainer:
              ((a = {
                boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
                borderRadius: '10px',
                padding: '1rem',
              }),
              Object(K.a)(a, e.breakpoints.only('xs'), {
                overflow: 'scroll',
                padding: '5px',
              }),
              Object(K.a)(
                a,
                '& .MuiTextField-root',
                ((t = {
                  margin: '1rem 2rem',
                  width: '100%',
                  maxWidth: '20rem',
                }),
                Object(K.a)(t, e.breakpoints.only('sm'), {
                  margin: '0.5rem 1rem',
                  maxWidth: '14rem',
                }),
                Object(K.a)(t, e.breakpoints.only('xs'), {
                  margin: '0.5rem 1rem',
                  maxWidth: '12rem',
                }),
                t)
              ),
              a),
          };
        }),
        He = function() {
          var e = Object(n.useState)({}),
            t = Object(d.a)(e, 2),
            a = t[0],
            l = t[1],
            i = Object(n.useState)([]),
            o = Object(d.a)(i, 2),
            c = o[0],
            s = o[1],
            u = Object(n.useState)([]),
            m = Object(d.a)(u, 2),
            p = m[0],
            f = m[1],
            g = Object(n.useState)('Earned'),
            b = Object(d.a)(g, 2),
            E = b[0],
            x = b[1],
            y = Object(n.useState)('Earned'),
            O = Object(d.a)(y, 2),
            j = O[0],
            w = O[1],
            k = (function() {
              var e = Object(v.a)(
                h.a.mark(function e() {
                  var t;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              B('/api/profit/', null, null)
                            );
                          case 3:
                            (t = e.sent), l(t.data), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  );
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(function() {
            k();
          }, []),
            Object(n.useEffect)(
              function() {
                if (a.Total) {
                  var e = [],
                    t = [];
                  Object.entries(a.Total).forEach(function(a) {
                    var n = Object(d.a)(a, 2),
                      r = n[0],
                      l = n[1];
                    'Total' !== r &&
                      (e.push({ name: r, value: l.earned }),
                      t.push({ name: r, value: l.spent }));
                  }),
                    f('Earned' === j ? e : t);
                  var n = [],
                    r = [];
                  Object.entries(a).forEach(function(e) {
                    var t = Object(d.a)(e, 2),
                      a = t[0],
                      l = t[1];
                    'Total' !== a &&
                      (n.push({ date: new Date(a), value: l.Total.earned }),
                      r.push({ date: new Date(a), value: l.Total.spent }));
                  }),
                    s('Earned' === E ? n : r);
                }
              },
              [E, j, a]
            );
          var S = Me();
          return r.a.createElement(
            r.a.Fragment,
            null,
            c.length < 2
              ? r.a.createElement(ze, { setData: l })
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    'div',
                    { className: S.graph },
                    r.a.createElement(
                      C.a,
                      { variant: 'h4', className: S.heading },
                      'Sales over time'
                    ),
                    r.a.createElement(
                      Q.a,
                      { className: S.graphContainer },
                      r.a.createElement(
                        $.a,
                        {
                          required: !0,
                          variant: 'filled',
                          id: 'type-area-input',
                          name: 'areaType',
                          select: !0,
                          label: 'Graph Type',
                          value: E,
                          onChange: function(e) {
                            x(e.target.value);
                          },
                        },
                        r.a.createElement(
                          Ce.a,
                          { key: 'Earned', value: 'Earned' },
                          'Earned'
                        ),
                        r.a.createElement(
                          Ce.a,
                          { key: 'Spent', value: 'Spent' },
                          'Spent'
                        )
                      ),
                      r.a.createElement(We, { data: c, type: E })
                    )
                  ),
                  r.a.createElement(
                    'div',
                    { className: S.graph },
                    r.a.createElement(
                      C.a,
                      { variant: 'h4', className: S.heading },
                      'Sales per product'
                    ),
                    r.a.createElement(
                      Q.a,
                      { className: S.graphContainer },
                      r.a.createElement(
                        $.a,
                        {
                          required: !0,
                          variant: 'filled',
                          id: 'type-bar-input',
                          name: 'barType',
                          select: !0,
                          label: 'Graph Type',
                          value: j,
                          onChange: function(e) {
                            w(e.target.value);
                          },
                        },
                        r.a.createElement(
                          Ce.a,
                          { key: 'Earned', value: 'Earned' },
                          'Earned'
                        ),
                        r.a.createElement(
                          Ce.a,
                          { key: 'Spent', value: 'Spent' },
                          'Spent'
                        )
                      ),
                      r.a.createElement(qe, { data: p, type: j })
                    )
                  )
                )
          );
        },
        Ue = a(25),
        Ve = a(315),
        Ge = a(316),
        Ze = a(317),
        Ke = a(318),
        Qe = a(319),
        $e = a(320),
        Je = a(321),
        Ye = a(104),
        Xe = a.n(Ye),
        et = a(61),
        tt = a.n(et),
        at = a(62),
        nt = a.n(at),
        rt = a(152),
        lt = Object(E.a)(function(e) {
          return { menuItem: { '& svg': { marginRight: e.spacing(1) } } };
        }),
        it = function(e) {
          var t = e.handleDelete,
            a = e.handleEdit,
            l = e.row,
            i = Object(n.useState)(null),
            o = Object(d.a)(i, 2),
            c = o[0],
            s = o[1],
            u = lt(),
            m = function(e, n) {
              e && ('Edit' === e ? a(n) : 'Delete' === e && t(n)), s(null);
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              k.a,
              {
                onClick: function(e) {
                  s(e.currentTarget);
                },
              },
              r.a.createElement(T.a, { className: u.menuIcon })
            ),
            r.a.createElement(
              rt.a,
              {
                elevation: 3,
                anchorEl: c,
                keepMounted: !0,
                open: Boolean(c),
                onClose: m,
              },
              r.a.createElement(
                Ce.a,
                {
                  onClick: function() {
                    m('Edit', l);
                  },
                  className: u.menuItem,
                },
                r.a.createElement(tt.a, null),
                ' Edit'
              ),
              r.a.createElement(
                Ce.a,
                {
                  onClick: function() {
                    m('Delete', l);
                  },
                  className: u.menuItem,
                },
                r.a.createElement(nt.a, null),
                ' Delete'
              )
            )
          );
        },
        ot = Object(n.createContext)(),
        ct = function(e) {
          var t = e.children,
            a = Object(n.useState)({
              open: !1,
              message: '',
              action: '',
              actionParams: '',
              type: '',
            }),
            l = Object(d.a)(a, 2),
            i = l[0],
            o = l[1];
          return r.a.createElement(
            ot.Provider,
            { value: { snack: i, setSnack: o } },
            t
          );
        },
        st = Object(E.a)(function(e) {
          return {
            paper: {
              boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              borderRadius: '10px',
            },
            table: {
              backgroundColor: 'white',
              borderRadius: '10px',
              '& th': Object(K.a)(
                {
                  backgroundColor: '#e7eff3',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: e.text.color.dark,
                },
                e.breakpoints.only('xs'),
                { fontSize: e.typography.pxToRem(14) }
              ),
              '& td': Object(K.a)(
                { fontSize: '1.5rem', color: e.text.color.darkGray },
                e.breakpoints.only('xs'),
                { fontSize: '1rem' }
              ),
              '& .MuiTableCell-root': Object(K.a)(
                {},
                e.breakpoints.only('xs'),
                { padding: e.spacing(1) }
              ),
              '& tr.delete': { display: 'none' },
            },
            heading: { fontWeight: '700', marginBottom: e.spacing(5) },
            fab: {
              position: 'fixed',
              bottom: e.spacing(4),
              right: e.spacing(4),
            },
            firstColumn: Object(K.a)(
              { width: '7rem', paddingRight: 0 },
              e.breakpoints.only('xs'),
              { width: 'initial', paddingLeft: e.spacing(1) }
            ),
          };
        });
      function ut() {
        var e = Object(n.useState)([]),
          t = Object(d.a)(e, 2),
          a = t[0],
          l = t[1],
          i = Object(n.useState)([]),
          o = Object(d.a)(i, 2),
          c = o[0],
          s = o[1],
          u = Object(n.useState)(!1),
          m = Object(d.a)(u, 2),
          p = m[0],
          f = m[1],
          b = Object(n.useState)(!1),
          E = Object(d.a)(b, 2),
          x = E[0],
          y = E[1],
          O = Object(n.useState)({}),
          j = Object(d.a)(O, 2),
          S = j[0],
          N = j[1],
          P = Object(g.g)(),
          T = Object(n.useContext)(ot).setSnack,
          L = function() {
            y(!0);
          },
          D = (function() {
            var e = Object(v.a)(
              h.a.mark(function e() {
                var t, a, n, r;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            f(!0),
                            (e.next = 4),
                            B('/auth/users/', null, P)
                          );
                        case 4:
                          (t = e.sent),
                            (a = t.data),
                            (n = { M: 'Male', F: 'Female', Other: 'Other' }),
                            (r = a.map(function(e) {
                              return {
                                firstName: e.first_name,
                                lastName: e.last_name,
                                name: ''
                                  .concat(e.first_name, ' ')
                                  .concat(e.last_name),
                                age: e.age,
                                gender: n[e.gender],
                                email: e.email,
                                isStaff: e.is_staff,
                              };
                            })),
                            l(r),
                            f(!1),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 12]]
                );
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })();
        Object(n.useEffect)(function() {
          D();
        }, []);
        var I = st(),
          R = function(e) {
            console.log(e),
              P.push('/updateemployee', {
                firstName: e.firstName,
                lastName: e.lastName,
                age: e.age,
                isStaff: e.isStaff,
                email: e.email,
              });
          },
          W = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t) {
                var n, r, l;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            f(!0),
                            (n = t.email),
                            (r = t.name),
                            s(function(e) {
                              return [].concat(Object(Ue.a)(e), [a.indexOf(t)]);
                            }),
                            (e.prev = 3),
                            (l = new FormData()).append('email', n),
                            (e.next = 8),
                            z('/auth/user_delete/', l, null, P)
                          );
                        case 8:
                          f(!1),
                            T({
                              open: !0,
                              message: 'Succesfully deleted '.concat(r),
                              action: '',
                              actionParams: '',
                              type: 'success',
                            }),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(3)), console.log(e.t0);
                        case 15:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 12]]
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })();
        return r.a.createElement(
          r.a.Fragment,
          null,
          p ? r.a.createElement(se, null) : null,
          r.a.createElement(
            C.a,
            { variant: 'h3', className: I.heading },
            'Employees'
          ),
          r.a.createElement(
            Q.a,
            { className: I.paper },
            r.a.createElement(
              Ve.a,
              null,
              r.a.createElement(
                Ge.a,
                { className: I.table, 'aria-label': 'simple table' },
                r.a.createElement(
                  Ze.a,
                  null,
                  r.a.createElement(
                    Ke.a,
                    null,
                    r.a.createElement(Qe.a, null),
                    r.a.createElement(Qe.a, null, 'Name'),
                    r.a.createElement(Qe.a, null, 'Gender'),
                    r.a.createElement(Qe.a, null, 'Email'),
                    r.a.createElement(Qe.a, { align: 'right' }, 'Age')
                  )
                ),
                r.a.createElement(
                  $e.a,
                  null,
                  a.map(function(e, t) {
                    return r.a.createElement(
                      Ke.a,
                      {
                        key: e.email,
                        hover: !0,
                        className: c.includes(t) ? 'delete' : '',
                      },
                      r.a.createElement(
                        Qe.a,
                        { className: I.firstColumn },
                        r.a.createElement(
                          w.a,
                          { xsDown: !0 },
                          r.a.createElement(
                            k.a,
                            {
                              onClick: function() {
                                R(e);
                              },
                            },
                            r.a.createElement(tt.a, null)
                          ),
                          r.a.createElement(
                            k.a,
                            {
                              onClick: function() {
                                N(e), L();
                              },
                            },
                            r.a.createElement(nt.a, null)
                          )
                        ),
                        r.a.createElement(
                          w.a,
                          { smUp: !0 },
                          r.a.createElement(it, {
                            handleDelete: function() {
                              N(e), L();
                            },
                            handleEdit: R,
                            row: e,
                          })
                        )
                      ),
                      r.a.createElement(Qe.a, null, e.name),
                      r.a.createElement(Qe.a, null, e.gender),
                      r.a.createElement(Qe.a, null, e.email),
                      r.a.createElement(Qe.a, { align: 'right' }, e.age)
                    );
                  })
                )
              )
            )
          ),
          r.a.createElement(A, {
            open: x,
            handleClose: function() {
              y(!1);
            },
            selectedRow: S,
            handleDelete: W,
            number: '1',
          }),
          r.a.createElement(
            Je.a,
            {
              color: 'primary',
              'aria-label': 'add',
              className: I.fab,
              onClick: function() {
                P.push('/addemployee');
              },
            },
            r.a.createElement(Xe.a, null)
          )
        );
      }
      var mt = a(328),
        pt = a(323),
        dt = a(327),
        ft = a(322),
        gt = a(332),
        bt = function(e) {
          var t = Object(n.useState)([[]]),
            a = Object(d.a)(t, 2),
            r = a[0],
            l = a[1],
            i = Object(n.useState)(!1),
            o = Object(d.a)(i, 2),
            c = o[0],
            s = o[1],
            u = Object(n.useContext)(H).setUpdate,
            m = Object(n.useState)([
              { productName: '', quantity: '', price: '', expiryDate: '' },
            ]),
            p = Object(d.a)(m, 2),
            f = p[0],
            b = p[1],
            E = Object(n.useState)([
              { product: ' ', quantity: ' ', price: ' ', expiryDate: ' ' },
            ]),
            x = Object(d.a)(E, 2),
            y = x[0],
            O = x[1],
            j = Object(n.useState)(!1),
            w = Object(d.a)(j, 2),
            k = w[0],
            S = w[1],
            C = Object(n.useState)(['Select a product to view details']),
            N = Object(d.a)(C, 2),
            P = N[0],
            T = N[1],
            L = Object(g.g)(),
            D = Object(n.useContext)(ot).setSnack,
            I = (function() {
              var t = Object(v.a)(
                h.a.mark(function t(a) {
                  var n, r, l, i, o, c;
                  return h.a.wrap(
                    function(t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((s(!0), (n = []), (t.prev = 2), 'Buy' !== e)) {
                              t.next = 12;
                              break;
                            }
                            return (t.next = 6), z('/api/buy/', a, null, L);
                          case 6:
                            (r = t.sent),
                              (l = r.data),
                              console.log('Here is response', l),
                              l.created && n.push(l),
                              (t.next = 17);
                            break;
                          case 12:
                            return (t.next = 14), z('/api/sell/', a, null, L);
                          case 14:
                            (i = t.sent),
                              (o = i.data),
                              console.log('Here is response', o);
                          case 17:
                            s(!1),
                              n.length
                                ? ((c = n[0]),
                                  D({
                                    open: !0,
                                    message: 'Added '.concat(c.name),
                                    action: 'EDIT',
                                    actionParams: {
                                      name: c.name,
                                      sellingPrice: c.latest_selling_price,
                                      loose: c.loose,
                                      id: c.id,
                                      upperLimit:
                                        null === c.upper_limit
                                          ? ''
                                          : c.upper_limit,
                                      lowerLimit:
                                        null === c.lower_limit
                                          ? ''
                                          : c.upper_limit,
                                    },
                                  }))
                                : 'Buy' === e
                                ? D({
                                    open: !0,
                                    message: 'Succesfully bought items',
                                    action: '',
                                    actionParams: '',
                                    type: 'success',
                                  })
                                : 'Sell' === e &&
                                  D({
                                    open: !0,
                                    message: 'Succesfully sold items',
                                    action: '',
                                    actionParams: '',
                                    type: 'success',
                                  }),
                              (t.next = 24);
                            break;
                          case 21:
                            (t.prev = 21),
                              (t.t0 = t.catch(2)),
                              console.log(t.t0);
                          case 24:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 21]]
                  );
                })
              );
              return function(e) {
                return t.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function() {
              y.every(function(e) {
                return Object.values(e).every(function(e) {
                  return ' ' === e;
                });
              }) &&
                k &&
                (f.forEach(function(t) {
                  var a,
                    n = new FormData();
                  n.append('name', t.productName),
                    n.append('quantity', t.quantity),
                    n.append('expiry', t.expiryDate),
                    'Buy' === e
                      ? n.append('avg_cost_price', t.price)
                      : n.append('latest_selling_price', t.price),
                    (a = console).log.apply(a, Object(Ue.a)(n)),
                    I(n),
                    u(function(e) {
                      return !e;
                    });
                }),
                S(!1),
                b([
                  { productName: '', quantity: '', price: '', expiryDate: '' },
                ]));
            },
            [y, k]
          ),
            Object(n.useEffect)(
              function() {
                var t = [];
                f.forEach(function(a, n) {
                  var l = 'Select a product to view details';
                  if ('' !== a.productName) {
                    var i = r.find(function(e) {
                      return e.name === a.productName;
                    });
                    l = i
                      ? 'Buy' === e
                        ? ''
                            .concat(i.quantity, ' in inventory ')
                            .concat(
                              null === i.upperLimit
                                ? ''
                                : ', '.concat(
                                    i.upperLimit,
                                    ' Recommended limit'
                                  ),
                              ' '
                            )
                        : ''
                            .concat(i.quantity, ' in inventory')
                            .concat(
                              null === i.lowerLimit
                                ? ''
                                : ', '.concat(i.lowerLimit, ' Critical limit'),
                              ' '
                            )
                      : 'No Details';
                  }
                  t[n] = l;
                }),
                  T(t);
              },
              [r, e, f]
            );
          return {
            values: f,
            error: y,
            handleChange: function(e, t) {
              e.persist(),
                b(function(a) {
                  var n = Object(Ue.a)(a);
                  return (
                    (n[t] = Object(re.a)(
                      Object(re.a)({}, n[t]),
                      {},
                      Object(K.a)({}, e.target.name, e.target.value)
                    )),
                    n
                  );
                });
            },
            handleSubmit: function(t) {
              t.preventDefault(),
                O(
                  (function(t) {
                    for (var a = [], n = 0; n < t.length; n += 1)
                      a = [].concat(Object(Ue.a)(a), [
                        {
                          product: ' ',
                          quantity: ' ',
                          price: ' ',
                          expiryDate: ' ',
                        },
                      ]);
                    return (
                      t.forEach(function(t, n) {
                        var l = ' ',
                          i = ' ',
                          o = ' ';
                        if ('Sell' === e && t.productName) {
                          var c = r.find(function(e) {
                            return e.name === t.productName;
                          }).quantity;
                          Number(t.quantity) > Number(c) &&
                            (i = 'Quantity cannot be greater than current stock : - '.concat(
                              c
                            ));
                        }
                        '' === t.productName &&
                          (l = 'Please fill out this field'),
                          '' === t.quantity
                            ? (i = 'Please fill out this field')
                            : '0' === t.quantity &&
                              (i = 'Quantity cannot be 0'),
                          '' === t.price
                            ? (o = 'Please fill out this field')
                            : '0' === t.price && (o = 'Price cannot be 0'),
                          (a[n] = {
                            product: l,
                            quantity: i,
                            price: o,
                            expiryDate: ' ',
                          });
                      }),
                      a
                    );
                  })(f)
                ),
                S(!0);
            },
            productsList: r,
            handleAddProduct: function() {
              b(function(e) {
                return [].concat(Object(Ue.a)(e), [
                  { productName: '', quantity: '', price: '', expiryDate: '' },
                ]);
              }),
                O(function(e) {
                  return [].concat(Object(Ue.a)(e), [
                    {
                      product: ' ',
                      quantity: ' ',
                      price: ' ',
                      expiryDate: ' ',
                    },
                  ]);
                }),
                T(function(e) {
                  return [].concat(Object(Ue.a)(e), [
                    'Select a product to view details',
                  ]);
                }),
                l(function(e) {
                  return [].concat(Object(Ue.a)(e), [[]]);
                });
            },
            handleProductChange: function(t, a, n) {
              if ('Buy' === e) {
                if (a && a.inputValue)
                  return void b(function(e) {
                    var t = Object(Ue.a)(e);
                    return (
                      (t[n] = Object(re.a)(
                        Object(re.a)({}, t[n]),
                        {},
                        { productName: a.inputValue }
                      )),
                      t
                    );
                  });
                b(function(e) {
                  var t = Object(Ue.a)(e),
                    r = '';
                  return (
                    (r = a ? (a.name ? a.name : a) : ''),
                    (t[n] = Object(re.a)(
                      Object(re.a)({}, t[n]),
                      {},
                      { productName: r }
                    )),
                    t
                  );
                });
              } else {
                var l = '';
                null === a
                  ? (l = '')
                  : 'string' === typeof a
                  ? (l = a)
                  : 'object' === typeof a && (l = a.name),
                  b(function(e) {
                    var t = Object(Ue.a)(e);
                    return (
                      (t[n] = Object(re.a)(
                        Object(re.a)({}, t[n]),
                        {},
                        { productName: l }
                      )),
                      t
                    );
                  });
                var i =
                  r.find(function(e) {
                    return e.name === l;
                  }) || {};
                b(function(e) {
                  var t = Object(Ue.a)(e);
                  return (
                    (t[n] = Object(re.a)(
                      Object(re.a)({}, t[n]),
                      {},
                      { price: i.price || '' }
                    )),
                    t
                  );
                });
              }
            },
            productDetails: P,
            isLoading: c,
            handleSearch: (function() {
              var e = Object(v.a)(
                h.a.mark(function e(t, a, n) {
                  var r, i, o;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              B(
                                '/api/productlist/?limit=10&offset=0&search='.concat(
                                  a
                                ),
                                null,
                                L
                              )
                            );
                          case 3:
                            (r = e.sent),
                              (i = r.data),
                              (o = i.results.map(function(e) {
                                return {
                                  name: e.name,
                                  quantity: e.quantity,
                                  price: e.latest_selling_price,
                                  id: e.id,
                                  upperLimit: e.upper_limit,
                                  lowerLimit: e.lower_limit,
                                };
                              })),
                              l(function(e) {
                                var t = Object(Ue.a)(e),
                                  r = o;
                                return '' === a && (r = []), (t[n] = r), t;
                              }),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function(t, a, n) {
                return e.apply(this, arguments);
              };
            })(),
          };
        },
        ht = Object(ft.a)(),
        vt = Object(E.a)(function(e) {
          var t;
          return {
            paper: Object(K.a)(
              {
                textAlign: 'center',
                padding: e.spacing(4),
                borderRadius: '10px',
                boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
              },
              e.breakpoints.only('sm'),
              { padding: e.spacing(2) }
            ),
            gridContainer: Object(K.a)(
              {
                display: 'grid',
                gridTemplateColumns: 'minmax(120px,1fr) minmax(300px,2fr)',
                '& > .MuiDivider-root': Object(K.a)(
                  { width: '60%', gridColumn: 'span 2', justifySelf: 'center' },
                  e.breakpoints.only('xs'),
                  { margin: '0 auto' }
                ),
              },
              e.breakpoints.only('xs'),
              { display: 'block' }
            ),
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: e.spacing(3),
              '& .MuiTextField-root': { width: '100%', maxWidth: '20rem' },
              '& > *': { margin: e.spacing(1) },
              '& > :first-child': { marginTop: 0 },
            },
            addProduct: Object(K.a)(
              {
                width: e.typography.pxToRem(165),
                justifySelf: 'center',
                marginBottom: e.spacing(3),
                marginTop: e.spacing(1),
              },
              e.breakpoints.down('xs'),
              { display: 'flex', marginLeft: 'auto', marginRight: 'auto' }
            ),
            paperHeading: { fontWeight: 'bold', marginBottom: e.spacing(2) },
            formHeading:
              ((t = { marginTop: e.spacing(3), textAlign: 'right' }),
              Object(K.a)(t, e.breakpoints.only('sm'), { textAlign: 'center' }),
              Object(K.a)(t, e.breakpoints.only('xs'), { textAlign: 'left' }),
              t),
            productDetails: { marginBottom: '2rem', maxWidth: '20rem' },
            button: Object(K.a)(
              {
                gridColumn: 'span 2',
                justifySelf: 'center',
                width: '100%',
                maxWidth: '12rem',
                height: '3rem',
                borderRadius: '2rem',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginTop: e.spacing(1.5),
                textTransform: 'capitalize',
                boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
              },
              e.breakpoints.down('xs'),
              {
                maxWidth: '12rem',
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
              }
            ),
          };
        }),
        Et = function(e) {
          var t = e.type,
            a = vt({ buy: t }),
            n = bt(t),
            l = n.values,
            i = n.error,
            o = n.handleChange,
            c = n.handleSubmit,
            s = n.productsList,
            u = n.handleAddProduct,
            m = n.handleProductChange,
            p = n.productDetails,
            d = n.isLoading,
            f = n.handleSearch;
          return r.a.createElement(
            r.a.Fragment,
            null,
            d ? r.a.createElement(se, null) : null,
            r.a.createElement(
              'div',
              null,
              r.a.createElement(
                Q.a,
                { className: a.paper },
                r.a.createElement(
                  C.a,
                  { variant: 'h4', className: a.paperHeading },
                  t,
                  ' Items'
                ),
                r.a.createElement(
                  'form',
                  {
                    noValidate: !0,
                    onSubmit: c,
                    autoComplete: 'off',
                    className: a.gridContainer,
                  },
                  l.map(function(e, n) {
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(Pe.a, null),
                      r.a.createElement(
                        C.a,
                        { variant: 'h5', className: a.formHeading },
                        'Product ',
                        l.length > 1 ? n + 1 : ''
                      ),
                      r.a.createElement(
                        'div',
                        { className: a.form },
                        'Buy' === t
                          ? r.a.createElement(gt.a, {
                              value: e.productName,
                              onInputChange: function(e, t) {
                                f(e, t, n);
                              },
                              onChange: function(e, t) {
                                m(e, t, n);
                              },
                              filterOptions: function(e, t) {
                                var a = ht(e, t);
                                return (
                                  '' !== t.inputValue &&
                                    a.push({
                                      inputValue: t.inputValue,
                                      name: 'Add "'.concat(t.inputValue, '"'),
                                    }),
                                  a
                                );
                              },
                              id: 'productfield-input',
                              options: s[n],
                              getOptionLabel: function(e) {
                                return 'string' === typeof e
                                  ? e
                                  : e.inputValue
                                  ? e.inputValue
                                  : e.name;
                              },
                              renderOption: function(e) {
                                return e.name;
                              },
                              freeSolo: !0,
                              style: { width: '100%', maxWidth: '20rem' },
                              renderInput: function(e) {
                                return r.a.createElement(
                                  $.a,
                                  Object.assign({}, e, {
                                    placeholder: 'Search...',
                                    required: !0,
                                    label: 'Product Name',
                                    variant: 'filled',
                                    error: !(' ' === i[n].product),
                                    helperText: i[n].product,
                                  })
                                );
                              },
                            })
                          : r.a.createElement(gt.a, {
                              value: e.productName,
                              onInputChange: function(e, t) {
                                f(e, t, n);
                              },
                              onChange: function(e, t) {
                                m(e, t, n);
                              },
                              style: { width: '100%', maxWidth: '20rem' },
                              id: 'productfield-input',
                              options: s[n],
                              getOptionLabel: function(e) {
                                return 'string' === typeof e
                                  ? e
                                  : e.inputValue
                                  ? e.inputValue
                                  : e.name;
                              },
                              getOptionSelected: function(e, t) {
                                return '' === t ? null : e.name === t;
                              },
                              freeSolo: !0,
                              renderInput: function(e) {
                                return r.a.createElement(
                                  $.a,
                                  Object.assign({}, e, {
                                    placeholder: 'Search...',
                                    required: !0,
                                    label: 'Product Name',
                                    variant: 'filled',
                                    error: !(' ' === i[n].product),
                                    helperText: i[n].product,
                                  })
                                );
                              },
                            }),
                        r.a.createElement(
                          C.a,
                          { variant: 'h5', className: a.productDetails },
                          p[n]
                        ),
                        r.a.createElement($.a, {
                          required: !0,
                          variant: 'filled',
                          id: 'price-input',
                          name: 'price',
                          type: 'number',
                          label: 'Price',
                          InputProps: { inputProps: { min: 0 } },
                          value: e.price,
                          onChange: function(e) {
                            return o(e, n);
                          },
                          error: !(' ' === i[n].price),
                          helperText: i[n].price,
                        }),
                        r.a.createElement($.a, {
                          required: !0,
                          variant: 'filled',
                          id: 'quantity-input',
                          name: 'quantity',
                          type: 'number',
                          label: 'Quantity',
                          InputProps: { inputProps: { min: 0 } },
                          value: e.quantity,
                          onChange: function(e) {
                            return o(e, n);
                          },
                          error: !(' ' === i[n].quantity),
                          helperText: i[n].quantity,
                        }),
                        'Buy' === t
                          ? r.a.createElement($.a, {
                              variant: 'filled',
                              id: 'expiry-date-input',
                              name: 'expiryDate',
                              type: 'date',
                              label: 'Expiry Date',
                              InputProps: {
                                inputProps: {
                                  min: new Date(Date.now())
                                    .toISOString()
                                    .slice(0, 10),
                                },
                              },
                              InputLabelProps: { shrink: !0 },
                              value: e.expiryDate,
                              onChange: function(e) {
                                return o(e, n);
                              },
                              error: !(' ' === i[n].expiryDate),
                              helperText: i[n].expiryDate,
                            })
                          : null
                      )
                    );
                  }),
                  r.a.createElement(C.a, null),
                  r.a.createElement(
                    N.a,
                    {
                      variant: 'outlined',
                      color: 'primary',
                      type: 'button',
                      onClick: u,
                      startIcon: r.a.createElement(Xe.a, null),
                      className: a.addProduct,
                    },
                    'Add Products'
                  ),
                  r.a.createElement(
                    N.a,
                    {
                      type: 'submit',
                      color: 'primary',
                      variant: 'contained',
                      className: a.button,
                      onClick: c,
                    },
                    t
                  )
                )
              )
            )
          );
        },
        xt = Object(E.a)(function(e) {
          return {
            paper: {
              boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              borderRadius: '10px',
            },
            table: {
              backgroundColor: 'white',
              borderRadius: '10px',
              '& th': Object(K.a)(
                {
                  backgroundColor: '#e7eff3',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: e.text.color.dark,
                },
                e.breakpoints.only('xs'),
                { fontSize: e.typography.pxToRem(14) }
              ),
              '& td': Object(K.a)(
                { fontSize: '1.5rem', color: e.text.color.darkGray },
                e.breakpoints.only('xs'),
                { fontSize: '1rem' }
              ),
            },
            heading: { fontWeight: '700', marginBottom: e.spacing(5) },
            fab: {
              position: 'fixed',
              bottom: e.spacing(4),
              right: e.spacing(4),
            },
            firstColumn: Object(K.a)(
              { width: '7rem', paddingRight: 0 },
              e.breakpoints.only('xs'),
              { width: 'initial', paddingLeft: e.spacing(1) }
            ),
          };
        }),
        yt = function() {
          var e = Object(n.useState)([]),
            t = Object(d.a)(e, 2),
            a = t[0],
            l = t[1],
            i = Object(n.useState)(!1),
            o = Object(d.a)(i, 2),
            c = o[0],
            s = o[1],
            u = Object(g.g)(),
            m = (function() {
              var e = Object(v.a)(
                h.a.mark(function e() {
                  var t, a;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              s(!0),
                              (e.next = 4),
                              B('/api/bill/', null, u)
                            );
                          case 4:
                            (t = e.sent),
                              (a = t.data),
                              l(a),
                              s(!1),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(function() {
            m();
          }, []);
          var p = xt();
          return r.a.createElement(
            r.a.Fragment,
            null,
            c ? r.a.createElement(se, null) : null,
            r.a.createElement(
              Q.a,
              { className: p.paper },
              r.a.createElement(
                Ve.a,
                null,
                r.a.createElement(
                  Ge.a,
                  { className: p.table, 'aria-label': 'simple table' },
                  r.a.createElement(
                    Ze.a,
                    null,
                    r.a.createElement(
                      Ke.a,
                      null,
                      r.a.createElement(Qe.a, null, ' ID '),
                      r.a.createElement(Qe.a, null, ' Date '),
                      r.a.createElement(Qe.a, null, 'Products'),
                      r.a.createElement(Qe.a, null, 'Items'),
                      r.a.createElement(Qe.a, { align: 'right' }, 'Price (Rs)'),
                      r.a.createElement(Qe.a, { align: 'center' }, 'Type')
                    )
                  ),
                  r.a.createElement(
                    $e.a,
                    null,
                    a.map(function(e) {
                      return r.a.createElement(
                        Ke.a,
                        { key: e.id, hover: !0 },
                        r.a.createElement(Qe.a, null, e.id),
                        r.a.createElement(
                          Qe.a,
                          null,
                          ((t = e.date_time),
                          new Date(t).toDateString().slice(4))
                        ),
                        r.a.createElement(
                          Qe.a,
                          null,
                          e.transaction.map(function(t, a) {
                            return a === e.transaction.length - 1
                              ? t.name
                              : ''.concat(t.name, ', ');
                          })
                        ),
                        r.a.createElement(
                          Qe.a,
                          null,
                          e.transaction.map(function(t, a) {
                            return a === e.transaction.length - 1
                              ? t.quantity
                              : ''.concat(t.quantity, ', ');
                          })
                        ),
                        r.a.createElement(
                          Qe.a,
                          { align: 'right' },
                          e.transaction.reduce(function(e, t) {
                            return e + t.rate * t.quantity;
                          }, 0)
                        ),
                        r.a.createElement(
                          Qe.a,
                          { align: 'center' },
                          'In' === e.in_or_out ? 'Buy' : 'Sell'
                        )
                      );
                      var t;
                    })
                  )
                )
              )
            )
          );
        },
        Ot = Object(Te.a)({
          indicator: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '& > div': {
              height: '1rem',
              borderRadius: '2px',
              maxWidth: '3rem',
              width: '100%',
              backgroundColor: '#495d69',
            },
          },
        })(function(e) {
          return r.a.createElement(
            mt.a,
            Object.assign({}, e, {
              TabIndicatorProps: { children: r.a.createElement('div', null) },
            })
          );
        }),
        jt = Object(Te.a)(function(e) {
          return {
            root: {
              textTransform: 'none',
              color: '#000',
              fontWeight: 'bold',
              fontSize: e.typography.pxToRem(24),
              marginRight: e.spacing(1),
              '&:focus': { opacity: 1 },
            },
          };
        })(function(e) {
          return r.a.createElement(
            pt.a,
            Object.assign({ disableRipple: !0 }, e)
          );
        });
      function wt(e) {
        var t = e.children,
          a = e.value,
          n = e.index,
          l = Object(p.a)(e, ['children', 'value', 'index']);
        return r.a.createElement(
          C.a,
          Object.assign(
            {
              component: 'div',
              role: 'tabpanel',
              hidden: a !== n,
              id: 'nav-tabpanel-'.concat(n),
              'aria-labelledby': 'nav-tab-'.concat(n),
            },
            l
          ),
          a === n && r.a.createElement(dt.a, { py: 3 }, t)
        );
      }
      var kt = Object(E.a)(function() {
        return { heading: { fontWeight: 'bold' } };
      });
      function St() {
        var e = Object(n.useState)(0),
          t = Object(d.a)(e, 2),
          a = t[0],
          l = t[1],
          i = kt();
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            C.a,
            { variant: 'h3', className: i.heading, gutterBottom: !0 },
            'Transactions'
          ),
          r.a.createElement(
            Ot,
            {
              value: a,
              onChange: function(e, t) {
                l(t);
              },
            },
            r.a.createElement(jt, { label: 'Buy' }),
            r.a.createElement(jt, { label: 'Sell' }),
            r.a.createElement(jt, { label: 'History' })
          ),
          r.a.createElement(
            wt,
            { value: a, index: 0 },
            r.a.createElement(Et, { type: 'Buy' })
          ),
          r.a.createElement(
            wt,
            { value: a, index: 1 },
            r.a.createElement(Et, { type: 'Sell' })
          ),
          r.a.createElement(
            wt,
            { value: a, index: 2 },
            r.a.createElement(yt, null)
          )
        );
      }
      var Ct = a(338),
        Nt = a(147),
        Pt = a.n(Nt),
        Tt = Object(E.a)(function(e) {
          return {
            search: {
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
              marginTop: '0',
            },
            paper: {
              boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              borderRadius: '10px',
            },
            table: {
              backgroundColor: 'white',
              borderRadius: '10px',
              '& th': Object(K.a)(
                {
                  backgroundColor: '#e7eff3',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: e.text.color.dark,
                },
                e.breakpoints.only('xs'),
                { fontSize: e.typography.pxToRem(14) }
              ),
              '& td': Object(K.a)(
                { fontSize: '1.5rem', color: e.text.color.darkGray },
                e.breakpoints.only('xs'),
                { fontSize: '1rem' }
              ),
              '& .MuiTableCell-root': Object(K.a)(
                {},
                e.breakpoints.only('xs'),
                { padding: e.spacing(1) }
              ),
              '& tr.delete': { display: 'none' },
            },
            firstColumn: Object(K.a)(
              { width: '7rem', paddingRight: 0 },
              e.breakpoints.only('xs'),
              { width: 'initial', paddingLeft: e.spacing(1) }
            ),
          };
        });
      function Lt() {
        var e = Object(n.useState)([]),
          t = Object(d.a)(e, 2),
          a = t[0],
          l = t[1],
          i = Object(n.useState)([]),
          o = Object(d.a)(i, 2),
          s = o[0],
          u = o[1],
          m = Object(n.useState)(!1),
          p = Object(d.a)(m, 2),
          f = p[0],
          b = p[1],
          E = Object(n.useState)(!1),
          x = Object(d.a)(E, 2),
          y = x[0],
          O = x[1],
          j = Object(n.useState)({}),
          S = Object(d.a)(j, 2),
          C = S[0],
          N = S[1],
          P = Object(n.useState)([]),
          T = Object(d.a)(P, 2),
          L = T[0],
          D = T[1],
          I = Object(n.useState)(''),
          R = Object(d.a)(I, 2),
          W = R[0],
          _ = R[1],
          q = Object(n.useState)(0),
          F = Object(d.a)(q, 2),
          z = F[0],
          M = F[1],
          H = Object(n.useState)(10),
          U = Object(d.a)(H, 2),
          V = U[0],
          G = U[1],
          Z = Object(n.useState)(0),
          K = Object(d.a)(Z, 2),
          Y = K[0],
          X = K[1],
          ee = Object(n.useState)(0),
          te = Object(d.a)(ee, 2),
          ae = te[0],
          ne = te[1],
          re = Object(n.useState)(10),
          le = Object(d.a)(re, 2),
          ie = le[0],
          oe = le[1],
          ce = Object(n.useState)(0),
          ue = Object(d.a)(ce, 2),
          me = ue[0],
          pe = ue[1],
          de = function() {
            O(!1);
          },
          fe = Object(g.g)(),
          ge = Object(n.useContext)(ot).setSnack,
          be = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t, a) {
                var n, r, i;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            b(!0),
                            ne(a),
                            (e.next = 5),
                            B(
                              '/api/productlist/?limit='
                                .concat(ie, '&offset=')
                                .concat(a * ie, '&search=')
                                .concat(W),
                              null,
                              fe
                            )
                          );
                        case 5:
                          (n = e.sent),
                            (r = n.data),
                            pe(r.count),
                            (i = r.results.map(function(e) {
                              return {
                                name: e.name,
                                quantity: e.quantity,
                                sellingPrice: e.latest_selling_price,
                                loose: e.loose,
                                id: e.id,
                                upperLimit:
                                  null === e.upper_limit ? '' : e.upper_limit,
                                lowerLimit:
                                  null === e.lower_limit ? '' : e.lower_limit,
                              };
                            })),
                            l(i),
                            b(!1),
                            (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 13]]
                );
              })
            );
            return function(t, a) {
              return e.apply(this, arguments);
            };
          })(),
          he = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t) {
                var a, n, r;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            b(!0),
                            ne(0),
                            oe(+t.target.value),
                            (e.next = 6),
                            B(
                              '/api/productlist/?limit='
                                .concat(+t.target.value, '&offset=0&search=')
                                .concat(W),
                              null,
                              fe
                            )
                          );
                        case 6:
                          (a = e.sent),
                            (n = a.data),
                            pe(n.count),
                            (r = n.results.map(function(e) {
                              return {
                                name: e.name,
                                quantity: e.quantity,
                                sellingPrice: e.latest_selling_price,
                                loose: e.loose,
                                id: e.id,
                                upperLimit:
                                  null === e.upper_limit ? '' : e.upper_limit,
                                lowerLimit:
                                  null === e.lower_limit ? '' : e.lower_limit,
                              };
                            })),
                            l(r),
                            b(!1),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 14]]
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })(),
          ve = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t, a) {
                var n, r, l;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            b(!0),
                            M(a),
                            (e.next = 5),
                            B(
                              '/api/productlist/?limit='
                                .concat(V, '&offset=')
                                .concat(a * V),
                              null,
                              fe
                            )
                          );
                        case 5:
                          (n = e.sent),
                            (r = n.data),
                            X(r.count),
                            (l = r.results.map(function(e) {
                              return {
                                name: e.name,
                                quantity: e.quantity,
                                sellingPrice: e.latest_selling_price,
                                loose: e.loose,
                                id: e.id,
                                upperLimit:
                                  null === e.upper_limit ? '' : e.upper_limit,
                                lowerLimit:
                                  null === e.lower_limit ? '' : e.lower_limit,
                              };
                            })),
                            D(l),
                            b(!1),
                            (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 13]]
                );
              })
            );
            return function(t, a) {
              return e.apply(this, arguments);
            };
          })(),
          Ee = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t) {
                var a, n, r;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            b(!0),
                            M(0),
                            G(+t.target.value),
                            (e.next = 6),
                            B(
                              '/api/productlist/?limit='.concat(
                                +t.target.value,
                                '&offset=0'
                              ),
                              null,
                              fe
                            )
                          );
                        case 6:
                          (a = e.sent),
                            (n = a.data),
                            X(n.count),
                            (r = n.results.map(function(e) {
                              return {
                                name: e.name,
                                quantity: e.quantity,
                                sellingPrice: e.latest_selling_price,
                                loose: e.loose,
                                id: e.id,
                                upperLimit:
                                  null === e.upper_limit ? '' : e.upper_limit,
                                lowerLimit:
                                  null === e.lower_limit ? '' : e.lower_limit,
                              };
                            })),
                            D(r),
                            b(!1),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 14]]
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })(),
          xe = function() {
            O(!0);
          },
          ye = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t) {
                var a, n;
                return h.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          _(t),
                          ne(0),
                          (e.next = 4),
                          B(
                            '/api/productlist/?limit='
                              .concat(ie, '&offset=0&search=')
                              .concat(t),
                            null,
                            fe
                          )
                        );
                      case 4:
                        (a = e.sent),
                          pe(a.data.count),
                          (n = a.data.results.map(function(e) {
                            return {
                              name: e.name,
                              quantity: e.quantity,
                              sellingPrice: e.latest_selling_price,
                              loose: e.loose,
                              id: e.id,
                              upperLimit:
                                null === e.upper_limit ? '' : e.upper_limit,
                              lowerLimit:
                                null === e.lower_limit ? '' : e.lower_limit,
                            };
                          })),
                          console.log(n),
                          l(n);
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })(),
          Oe = (function() {
            var e = Object(v.a)(
              h.a.mark(function e() {
                var t, a, n;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            b(!0),
                            (e.next = 4),
                            B('/api/productlist/?limit=10&offset=0', null, fe)
                          );
                        case 4:
                          (t = e.sent),
                            console.log(t.data.results),
                            (a = t.data),
                            X(a.count),
                            (n = a.results.map(function(e) {
                              return {
                                name: e.name,
                                quantity: e.quantity,
                                sellingPrice: e.latest_selling_price,
                                loose: e.loose,
                                id: e.id,
                                upperLimit:
                                  null === e.upper_limit ? '' : e.upper_limit,
                                lowerLimit:
                                  null === e.lower_limit ? '' : e.lower_limit,
                              };
                            })),
                            D(n),
                            l(n),
                            b(!1),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 14]]
                );
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })();
        Object(n.useEffect)(function() {
          Oe();
        }, []);
        var je = Tt(),
          we = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t) {
                var n, r, l;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            b(!0),
                            (n = t.id),
                            u(function(e) {
                              return [].concat(Object(Ue.a)(e), [a.indexOf(t)]);
                            }),
                            (e.prev = 3),
                            (e.next = 6),
                            c.a.delete('/api/productlist/'.concat(n, '/'))
                          );
                        case 6:
                          (r = a.find(function(e) {
                            return e.id === n;
                          })),
                            (l = r.name),
                            b(!1),
                            ge({
                              open: !0,
                              message: 'Succesfully deleted '.concat(l),
                              action: '',
                              actionParams: '',
                              type: 'success',
                            }),
                            (e.next = 14);
                          break;
                        case 11:
                          (e.prev = 11), (e.t0 = e.catch(3)), console.log(e.t0);
                        case 14:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[3, 11]]
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })(),
          ke = function(e) {
            fe.push('/updateproduct', {
              name: e.name,
              sellingPrice: e.sellingPrice,
              loose: e.loose,
              id: e.id,
              upperLimit: e.upperLimit,
              lowerLimit: e.lowerLimit,
            });
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          f ? r.a.createElement(se, null) : null,
          r.a.createElement(
            'div',
            { className: je.search },
            r.a.createElement($.a, {
              onChange: function(e) {
                return ye(e.target.value);
              },
              style: { width: '350px' },
              id: 'standard-basic',
              label: 'Search',
              variant: 'filled',
              InputProps: {
                startAdornment: r.a.createElement(
                  J.a,
                  { position: 'start' },
                  r.a.createElement(Pt.a, null)
                ),
              },
            })
          ),
          '' === W
            ? r.a.createElement(
                r.a.Fragment,
                null,
                ' ',
                r.a.createElement(
                  Q.a,
                  { className: je.paper },
                  r.a.createElement(
                    Ve.a,
                    null,
                    r.a.createElement(
                      Ge.a,
                      { className: je.table, 'aria-label': 'simple table' },
                      r.a.createElement(
                        Ze.a,
                        null,
                        r.a.createElement(
                          Ke.a,
                          null,
                          r.a.createElement(Qe.a, null),
                          r.a.createElement(Qe.a, null, 'Product'),
                          r.a.createElement(Qe.a, { align: 'right' }, 'Items'),
                          r.a.createElement(
                            Qe.a,
                            { align: 'right' },
                            'Price (Rs)'
                          )
                        )
                      ),
                      r.a.createElement(
                        $e.a,
                        null,
                        L.map(function(e, t) {
                          return r.a.createElement(
                            Ke.a,
                            {
                              key: e.name,
                              hover: !0,
                              className: s.includes(t) ? 'delete' : '',
                            },
                            r.a.createElement(
                              Qe.a,
                              { className: je.firstColumn },
                              r.a.createElement(
                                w.a,
                                { xsDown: !0 },
                                r.a.createElement(
                                  k.a,
                                  {
                                    onClick: function() {
                                      ke(e);
                                    },
                                  },
                                  r.a.createElement(tt.a, null)
                                ),
                                r.a.createElement(
                                  k.a,
                                  {
                                    onClick: function() {
                                      N(e), xe();
                                    },
                                  },
                                  r.a.createElement(nt.a, null)
                                )
                              ),
                              r.a.createElement(
                                w.a,
                                { smUp: !0 },
                                r.a.createElement(it, {
                                  handleDelete: function() {
                                    N(e), xe();
                                  },
                                  handleEdit: ke,
                                  row: e,
                                })
                              )
                            ),
                            r.a.createElement(Qe.a, null, e.name),
                            r.a.createElement(
                              Qe.a,
                              { align: 'right' },
                              e.quantity
                            ),
                            r.a.createElement(
                              Qe.a,
                              { align: 'right' },
                              e.sellingPrice || 'Not Set'
                            )
                          );
                        })
                      )
                    )
                  ),
                  r.a.createElement(Ct.a, {
                    rowsPerPageOptions: [5, 10],
                    component: 'div',
                    count: Y,
                    page: z,
                    rowsPerPage: V,
                    onChangePage: ve,
                    onChangeRowsPerPage: Ee,
                  })
                ),
                r.a.createElement(A, {
                  open: y,
                  handleClose: de,
                  selectedRow: C,
                  handleDelete: we,
                  number: '1',
                })
              )
            : r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  Q.a,
                  { className: je.paper },
                  r.a.createElement(
                    Ve.a,
                    null,
                    r.a.createElement(
                      Ge.a,
                      { className: je.table, 'aria-label': 'simple table' },
                      r.a.createElement(
                        Ze.a,
                        null,
                        r.a.createElement(
                          Ke.a,
                          null,
                          r.a.createElement(Qe.a, null),
                          r.a.createElement(Qe.a, null, 'Product'),
                          r.a.createElement(Qe.a, { align: 'right' }, 'Items'),
                          r.a.createElement(
                            Qe.a,
                            { align: 'right' },
                            'Price (Rs)'
                          )
                        )
                      ),
                      r.a.createElement(
                        $e.a,
                        null,
                        a.map(function(e, t) {
                          return r.a.createElement(
                            Ke.a,
                            {
                              key: e.name,
                              hover: !0,
                              className: s.includes(t) ? 'delete' : '',
                            },
                            r.a.createElement(
                              Qe.a,
                              { className: je.firstColumn },
                              r.a.createElement(
                                w.a,
                                { xsDown: !0 },
                                r.a.createElement(
                                  k.a,
                                  {
                                    onClick: function() {
                                      ke(e);
                                    },
                                  },
                                  r.a.createElement(tt.a, null)
                                ),
                                r.a.createElement(
                                  k.a,
                                  {
                                    onClick: function() {
                                      N(e), xe();
                                    },
                                  },
                                  r.a.createElement(nt.a, null)
                                )
                              ),
                              r.a.createElement(
                                w.a,
                                { smUp: !0 },
                                r.a.createElement(it, {
                                  handleDelete: function() {
                                    N(e), xe();
                                  },
                                  handleEdit: ke,
                                  row: e,
                                })
                              )
                            ),
                            r.a.createElement(Qe.a, null, e.name),
                            r.a.createElement(
                              Qe.a,
                              { align: 'right' },
                              e.quantity
                            ),
                            r.a.createElement(
                              Qe.a,
                              { align: 'right' },
                              e.sellingPrice || 'Not Set'
                            )
                          );
                        })
                      )
                    )
                  ),
                  r.a.createElement(Ct.a, {
                    rowsPerPageOptions: [5, 10],
                    component: 'div',
                    count: me,
                    page: ae,
                    rowsPerPage: ie,
                    onChangePage: be,
                    onChangeRowsPerPage: he,
                  })
                ),
                r.a.createElement(A, {
                  open: y,
                  handleClose: de,
                  selectedRow: C,
                  handleDelete: we,
                  number: '1',
                })
              )
        );
      }
      var Dt = Object(E.a)(function(e) {
        return {
          paper: {
            boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
            textAlign: 'center',
            borderRadius: '10px',
          },
          tableContainer: { border: '2px solid #f2c94c' },
          table: {
            backgroundColor: 'white',
            borderRadius: '10px',
            '& th': Object(K.a)(
              {
                backgroundColor: '#e7eff3',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: e.text.color.dark,
              },
              e.breakpoints.only('xs'),
              { fontSize: e.typography.pxToRem(14) }
            ),
            '& td': Object(K.a)(
              { fontSize: '1.5rem', color: e.text.color.darkGray },
              e.breakpoints.only('xs'),
              { fontSize: '1rem' }
            ),
            '& .MuiTableCell-root': Object(K.a)({}, e.breakpoints.only('xs'), {
              padding: e.spacing(1),
            }),
          },
        };
      });
      function It() {
        var e = Object(n.useState)([]),
          t = Object(d.a)(e, 2),
          a = t[0],
          l = t[1],
          i = Object(n.useState)(!1),
          o = Object(d.a)(i, 2),
          c = o[0],
          s = o[1],
          u = Object(n.useState)(0),
          m = Object(d.a)(u, 2),
          p = m[0],
          f = m[1],
          b = Object(n.useState)(10),
          E = Object(d.a)(b, 2),
          x = E[0],
          y = E[1],
          O = Object(n.useState)(0),
          j = Object(d.a)(O, 2),
          w = j[0],
          k = j[1],
          S = Object(g.g)(),
          C = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t, a) {
                var n, r, i;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            s(!0),
                            f(a),
                            (e.next = 5),
                            B(
                              '/api/explist/?limit='
                                .concat(x, '&offset=')
                                .concat(a * x),
                              null,
                              S
                            )
                          );
                        case 5:
                          (n = e.sent),
                            (r = n.data),
                            k(r.count),
                            console.log(r),
                            (i = r.results.map(function(e) {
                              return {
                                name: e.Product,
                                quantity: e['No. of items'],
                                daysLeft: e['Days left'],
                              };
                            })),
                            l(i),
                            s(!1),
                            (e.next = 17);
                          break;
                        case 14:
                          (e.prev = 14), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 14]]
                );
              })
            );
            return function(t, a) {
              return e.apply(this, arguments);
            };
          })(),
          N = (function() {
            var e = Object(v.a)(
              h.a.mark(function e(t) {
                var a, n, r;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            s(!0),
                            f(0),
                            y(+t.target.value),
                            (e.next = 6),
                            B(
                              '/api/explist/?limit='.concat(
                                +t.target.value,
                                '&offset=0'
                              ),
                              null,
                              S
                            )
                          );
                        case 6:
                          (a = e.sent),
                            (n = a.data),
                            k(n.count),
                            console.log(n),
                            (r = n.results.map(function(e) {
                              return {
                                name: e.Product,
                                quantity: e['No. of items'],
                                daysLeft: e['Days left'],
                              };
                            })),
                            l(r),
                            s(!1),
                            (e.next = 18);
                          break;
                        case 15:
                          (e.prev = 15), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 15]]
                );
              })
            );
            return function(t) {
              return e.apply(this, arguments);
            };
          })(),
          P = (function() {
            var e = Object(v.a)(
              h.a.mark(function e() {
                var t, a, n;
                return h.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            s(!0),
                            (e.next = 4),
                            B('/api/explist/?limit=10&offset=0', null, S)
                          );
                        case 4:
                          (t = e.sent),
                            (a = t.data),
                            k(a.count),
                            console.log(a),
                            (n = a.results.map(function(e) {
                              return {
                                name: e.Product,
                                quantity: e['No. of items'],
                                daysLeft: e['Days left'],
                              };
                            })),
                            l(n),
                            s(!1),
                            (e.next = 16);
                          break;
                        case 13:
                          (e.prev = 13), (e.t0 = e.catch(0)), console.log(e.t0);
                        case 16:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 13]]
                );
              })
            );
            return function() {
              return e.apply(this, arguments);
            };
          })();
        Object(n.useEffect)(function() {
          P();
        }, []);
        var T = Dt();
        return r.a.createElement(
          r.a.Fragment,
          null,
          c ? r.a.createElement(se, null) : null,
          r.a.createElement(
            Q.a,
            { className: T.paper },
            r.a.createElement(
              Ve.a,
              { className: T.tableContainer },
              r.a.createElement(
                Ge.a,
                { className: T.table, 'aria-label': 'simple table' },
                r.a.createElement(
                  Ze.a,
                  null,
                  r.a.createElement(
                    Ke.a,
                    null,
                    r.a.createElement(Qe.a, null, 'Product'),
                    r.a.createElement(Qe.a, { align: 'right' }, 'Items'),
                    r.a.createElement(Qe.a, { align: 'right' }, 'Days Left')
                  )
                ),
                r.a.createElement(
                  $e.a,
                  null,
                  a.map(function(e) {
                    return r.a.createElement(
                      Ke.a,
                      { key: e.name, hover: !0 },
                      r.a.createElement(Qe.a, null, e.name),
                      r.a.createElement(Qe.a, { align: 'right' }, e.quantity),
                      r.a.createElement(Qe.a, { align: 'right' }, e.daysLeft)
                    );
                  })
                )
              )
            ),
            r.a.createElement(Ct.a, {
              rowsPerPageOptions: [5, 10],
              component: 'div',
              count: w,
              page: p,
              rowsPerPage: x,
              onChangePage: C,
              onChangeRowsPerPage: N,
            })
          )
        );
      }
      var Rt = Object(Te.a)({
          indicator: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '& > div': {
              height: '1rem',
              borderRadius: '2px',
              maxWidth: '3rem',
              width: '100%',
              backgroundColor: '#495d69',
            },
          },
        })(function(e) {
          return r.a.createElement(
            mt.a,
            Object.assign({}, e, {
              TabIndicatorProps: { children: r.a.createElement('div', null) },
            })
          );
        }),
        Wt = Object(Te.a)(function(e) {
          return {
            root: {
              textTransform: 'none',
              color: '#000',
              fontWeight: 'bold',
              fontSize: e.typography.pxToRem(24),
              marginRight: e.spacing(1),
              '&:focus': { opacity: 1 },
            },
          };
        })(function(e) {
          return r.a.createElement(
            pt.a,
            Object.assign({ disableRipple: !0 }, e)
          );
        });
      function _t(e) {
        var t = e.children,
          a = e.value,
          n = e.index,
          l = Object(p.a)(e, ['children', 'value', 'index']);
        return r.a.createElement(
          C.a,
          Object.assign(
            {
              component: 'div',
              role: 'tabpanel',
              hidden: a !== n,
              id: 'nav-tabpanel-'.concat(n),
              'aria-labelledby': 'nav-tab-'.concat(n),
            },
            l
          ),
          a === n && r.a.createElement(dt.a, { py: 3 }, t)
        );
      }
      var qt = Object(E.a)(function() {
        return {
          heading: { fontWeight: '700' },
          badge: {
            '& .MuiBadge-badge': {
              top: '50%',
              right: '-12%',
              color: 'black',
              backgroundColor: '#f2c94c',
            },
          },
        };
      });
      function At() {
        var e = Object(n.useState)(0),
          t = Object(d.a)(e, 2),
          a = t[0],
          l = t[1],
          i = qt(),
          o = Object(n.useContext)(H).expiryListBadge;
        return r.a.createElement(
          'div',
          { className: i.root },
          r.a.createElement(
            C.a,
            { variant: 'h3', className: i.heading, gutterBottom: !0 },
            'Inventory'
          ),
          r.a.createElement(
            Rt,
            {
              value: a,
              onChange: function(e, t) {
                l(t);
              },
            },
            r.a.createElement(Wt, { label: 'All' }),
            r.a.createElement(Wt, {
              style: { paddingRight: '2rem' },
              label: r.a.createElement(
                S.a,
                {
                  badgeContent: o,
                  color: 'primary',
                  overlap: 'circle',
                  className: i.badge,
                },
                'Near expiry'
              ),
            })
          ),
          r.a.createElement(
            _t,
            { value: a, index: 0 },
            r.a.createElement(Lt, null)
          ),
          r.a.createElement(
            _t,
            { value: a, index: 1 },
            r.a.createElement(
              C.a,
              { variant: 'h6', gutterBottom: !0 },
              'Items which expire in the next 3 days are displayed here'
            ),
            r.a.createElement(It, null)
          )
        );
      }
      var Bt = a(306),
        Ft = a(307),
        zt = a(339),
        Mt = a(324),
        Ht = a(329),
        Ut = function() {
          var e = Object(n.useState)({
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              age: '',
              gender: 'M',
              isStaff: 'true',
            }),
            t = Object(d.a)(e, 2),
            a = t[0],
            r = t[1],
            l = Object(n.useState)(!1),
            i = Object(d.a)(l, 2),
            o = i[0],
            c = i[1],
            s = Object(n.useState)(!1),
            u = Object(d.a)(s, 2),
            m = u[0],
            p = u[1],
            f = Object(n.useState)({
              errors: !1,
              firstName: ' ',
              lastName: ' ',
              email: ' ',
              password: ' ',
              confirmPassword: ' ',
              age: ' ',
              gender: ' ',
            }),
            b = Object(d.a)(f, 2),
            E = b[0],
            x = b[1],
            y = Object(n.useState)(''),
            O = Object(d.a)(y, 2),
            j = O[0],
            w = O[1],
            k = Object(n.useState)(!1),
            S = Object(d.a)(k, 2),
            C = S[0],
            N = S[1],
            P = Object(n.useState)(!1),
            T = Object(d.a)(P, 2),
            L = T[0],
            D = T[1],
            I = Object(g.g)(),
            R = Object(n.useContext)(ot).setSnack,
            W = (function() {
              var e = Object(v.a)(
                h.a.mark(function e(t) {
                  var n;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              D(!0),
                              (e.next = 4),
                              z('/auth/users/', t, null, I)
                            );
                          case 4:
                            D(!1),
                              R({
                                open: !0,
                                message: 'Succesfully added '
                                  .concat(a.firstName, ' ')
                                  .concat(a.lastName),
                                action: '',
                                actionParams: '',
                                type: 'success',
                              }),
                              I.push('/employee'),
                              (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0.response),
                              400 === e.t0.response.status &&
                                ((n = Object.values(e.t0.response.data)[0][0]),
                                w(n),
                                D(!1),
                                R({
                                  open: !0,
                                  message: n,
                                  action: '',
                                  actionParams: '',
                                  type: 'error',
                                }));
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function() {
              if (!E.errors && C) {
                var e = new FormData();
                e.append('email', a.email),
                  e.append('password', a.password),
                  e.append('first_name', a.firstName),
                  e.append('last_name', a.lastName),
                  e.append('age', a.age),
                  e.append('gender', a.gender),
                  e.append('is_staff', a.isStaff),
                  W(e),
                  N(!1);
              }
            },
            [E, C]
          );
          return {
            handleChange: function(e) {
              e.persist(),
                r(function(t) {
                  return Object(re.a)(
                    Object(re.a)({}, t),
                    {},
                    Object(K.a)({}, e.target.name, e.target.value)
                  );
                });
            },
            handleSubmit: function(e) {
              e && e.preventDefault(),
                x(
                  (function(e) {
                    var t = {
                      errors: !1,
                      firstName: ' ',
                      lastName: ' ',
                      email: ' ',
                      password: ' ',
                      confirmPassword: ' ',
                      age: ' ',
                      gender: ' ',
                    };
                    return (
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        e.email
                      ) ||
                        ((t.email = 'Please enter a valid email'),
                        (t.errors = !0)),
                      e.password.length < 5 &&
                        ((t.password =
                          'Password should have more than 5 characters'),
                        (t.errors = !0)),
                      e.confirmPassword !== e.password &&
                        ((t.confirmPassword = 'Passwords do not match'),
                        (t.errors = !0)),
                      '0' === e.age &&
                        ((t.age = 'Age cannot be 0'), (t.errors = !0)),
                      Object.keys(e).forEach(function(a) {
                        '' === e[a] &&
                          ((t[a] = 'Please fill out this field'),
                          (t.errors = !0));
                      }),
                      t
                    );
                  })(a)
                ),
                N(!0);
            },
            error: E,
            invalidCred: j,
            setInvalidCred: w,
            values: a,
            showPassword: o,
            showConfirmPassword: m,
            setError: x,
            toggleShowPassword: function() {
              c(function(e) {
                return !e;
              });
            },
            toggleShowconfirmPassword: function() {
              p(function(e) {
                return !e;
              });
            },
            isLoading: L,
          };
        },
        Vt = Object(E.a)(function(e) {
          var t;
          return {
            paper: Object(K.a)(
              {
                textAlign: 'center',
                padding: e.spacing(4),
                borderRadius: '10px',
                boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
              },
              e.breakpoints.only('sm'),
              { paddingLeft: e.spacing(2), paddingRight: e.spacing(2) }
            ),
            gridContainer: Object(K.a)(
              {
                display: 'grid',
                gridTemplateColumns: 'minmax(120px,1fr) minmax(300px,2fr)',
                '& > .MuiDivider-root': Object(K.a)(
                  { width: '60%', gridColumn: 'span 2', justifySelf: 'center' },
                  e.breakpoints.only('xs'),
                  { margin: '0 auto' }
                ),
              },
              e.breakpoints.only('xs'),
              { display: 'block' }
            ),
            formHeading:
              ((t = { marginTop: e.spacing(3), textAlign: 'right' }),
              Object(K.a)(t, e.breakpoints.only('sm'), { textAlign: 'center' }),
              Object(K.a)(t, e.breakpoints.only('xs'), { textAlign: 'left' }),
              t),
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: e.spacing(3),
              '& .MuiTextField-root': { width: '100%', maxWidth: '20rem' },
              '& > *': { margin: e.spacing(1) },
              '& > :first-child': { marginTop: 0 },
            },
            heading: { fontWeight: '700', marginBottom: e.spacing(2.5) },
            button: Object(K.a)(
              {
                gridColumn: 'span 2',
                justifySelf: 'center',
                width: '100%',
                maxWidth: '18rem',
                height: '3rem',
                borderRadius: '2rem',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginTop: e.spacing(1.5),
                textTransform: 'capitalize',
                boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
              },
              e.breakpoints.down('xs'),
              { maxWidth: '12rem' }
            ),
            radio: { display: 'flex', flexDirection: 'row' },
            invalid: {
              display: function(e) {
                return '' === e.invalid ? 'none' : 'block';
              },
            },
          };
        }),
        Gt = function() {
          var e = Ut(),
            t = e.handleChange,
            a = e.handleSubmit,
            n = e.error,
            l = e.invalidCred,
            i = e.values,
            o = e.showConfirmPassword,
            c = e.showPassword,
            s = e.toggleShowPassword,
            u = e.toggleShowconfirmPassword,
            m = e.isLoading,
            p = Vt({ invalid: l });
          return r.a.createElement(
            r.a.Fragment,
            null,
            m ? r.a.createElement(se, null) : null,
            r.a.createElement(
              Q.a,
              { className: p.paper },
              r.a.createElement(
                C.a,
                { variant: 'h4', className: p.heading },
                'Add New Employee'
              ),
              r.a.createElement(
                C.a,
                {
                  variant: 'h6',
                  color: 'error',
                  className: p.invalid,
                  gutterBottom: !0,
                },
                l
              ),
              r.a.createElement(
                'form',
                {
                  noValidate: !0,
                  onSubmit: a,
                  autoComplete: 'off',
                  className: p.gridContainer,
                },
                r.a.createElement(Pe.a, null),
                r.a.createElement(
                  C.a,
                  { variant: 'h5', className: p.formHeading },
                  'Account'
                ),
                r.a.createElement(
                  'div',
                  { className: p.form },
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'last-name-input',
                    name: 'firstName',
                    label: 'First Name',
                    value: i.firstName,
                    onChange: t,
                    error: !(' ' === n.firstName),
                    helperText: n.firstName,
                  }),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'first-name-input',
                    name: 'lastName',
                    label: 'Last Name',
                    value: i.lastName,
                    onChange: t,
                    error: !(' ' === n.lastName),
                    helperText: n.lastName,
                  }),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'email-input',
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    value: i.email,
                    onChange: t,
                    error: !(' ' === n.email),
                    helperText: n.email,
                  }),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'password-input',
                    name: 'password',
                    type: c ? 'text' : 'password',
                    label: 'Password',
                    value: i.password,
                    onChange: t,
                    error: !(' ' === n.password),
                    helperText: n.password,
                    InputProps: {
                      endAdornment: r.a.createElement(
                        J.a,
                        { position: 'end' },
                        r.a.createElement(
                          k.a,
                          { onClick: s, tabIndex: '-1' },
                          c
                            ? r.a.createElement(X.a, null)
                            : r.a.createElement(te.a, null)
                        )
                      ),
                    },
                  }),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'confirm-password-input',
                    name: 'confirmPassword',
                    type: o ? 'text' : 'password',
                    label: 'Confirm Password',
                    value: i.confirmPassword,
                    onChange: t,
                    error: !(' ' === n.confirmPassword),
                    helperText: n.confirmPassword,
                    InputProps: {
                      endAdornment: r.a.createElement(
                        J.a,
                        { position: 'end' },
                        r.a.createElement(
                          k.a,
                          { onClick: u, tabIndex: '-1' },
                          o
                            ? r.a.createElement(X.a, null)
                            : r.a.createElement(te.a, null)
                        )
                      ),
                    },
                  }),
                  r.a.createElement(
                    $.a,
                    {
                      required: !0,
                      variant: 'filled',
                      id: 'gender-input',
                      name: 'gender',
                      select: !0,
                      label: 'Employee Gender',
                      value: i.gender,
                      onChange: t,
                      error: !(' ' === n.gender),
                      helperText: n.gender,
                    },
                    ['Male', 'Female', 'Other'].map(function(e, t) {
                      return r.a.createElement(
                        Ce.a,
                        { key: e, value: ['M', 'F', 'Other'][t] },
                        e
                      );
                    })
                  ),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'age-input',
                    name: 'age',
                    type: 'number',
                    label: 'Employee Age',
                    InputProps: { inputProps: { min: 0 } },
                    value: i.age,
                    onChange: t,
                    error: !(' ' === n.age),
                    helperText: n.age,
                  }),
                  r.a.createElement(
                    Bt.a,
                    { component: 'fieldset' },
                    r.a.createElement(Ft.a, { component: 'legend' }, 'Type'),
                    r.a.createElement(
                      zt.a,
                      {
                        name: 'isStaff',
                        value: i.isStaff,
                        onChange: t,
                        className: p.radio,
                      },
                      r.a.createElement(Mt.a, {
                        value: 'true',
                        control: r.a.createElement(Ht.a, null),
                        label: 'Manager',
                      }),
                      r.a.createElement(Mt.a, {
                        value: 'false',
                        control: r.a.createElement(Ht.a, null),
                        label: 'Employee',
                      })
                    )
                  )
                ),
                r.a.createElement(
                  N.a,
                  {
                    type: 'submit',
                    color: 'primary',
                    variant: 'contained',
                    className: p.button,
                    onClick: a,
                  },
                  'Register'
                )
              )
            )
          );
        },
        Zt = function(e) {
          var t = e.name,
            a = e.sellingPrice,
            r = e.loose,
            l = e.id,
            i = e.upperLimit,
            o = e.lowerLimit,
            c = Object(n.useState)({
              name: t,
              sellingPrice: a || '',
              loose: !0 === r ? 'true' : 'false',
              upperLimit: i,
              lowerLimit: o,
            }),
            s = Object(d.a)(c, 2),
            u = s[0],
            m = s[1],
            p = Object(n.useState)({
              errors: !1,
              name: ' ',
              sellingPrice: ' ',
              loose: ' ',
              upperLimit: ' ',
              lowerLimit: ' ',
            }),
            f = Object(d.a)(p, 2),
            b = f[0],
            E = f[1],
            x = Object(n.useState)(!1),
            y = Object(d.a)(x, 2),
            O = y[0],
            j = y[1],
            w = Object(n.useState)(!1),
            k = Object(d.a)(w, 2),
            S = k[0],
            C = k[1],
            N = Object(g.g)(),
            P = Object(n.useContext)(ot).setSnack,
            T = (function() {
              var e = Object(v.a)(
                h.a.mark(function e(t) {
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              C(!0),
                              (e.next = 4),
                              z('/api/update/'.concat(l, '/'), t, null, N)
                            );
                          case 4:
                            C(!1),
                              P({
                                open: !0,
                                message: 'Succesfully updated '.concat(u.name),
                                action: '',
                                actionParams: '',
                                type: 'success',
                              }),
                              N.push('/inventory'),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0.response);
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function() {
              if (!b.errors && O) {
                var e = new FormData();
                e.append('name', u.name),
                  e.append('latest_selling_price', u.sellingPrice);
                var t = 'true' === u.loose ? 'True' : 'False';
                e.append('loose', t),
                  '' !== u.upperLimit && e.append('upper', u.upperLimit),
                  '' !== u.lowerLimit && e.append('lower', u.lowerLimit),
                  T(e),
                  j(!1);
              }
            },
            [b, O]
          );
          return {
            handleChange: function(e) {
              e.persist(),
                m(function(t) {
                  return Object(re.a)(
                    Object(re.a)({}, t),
                    {},
                    Object(K.a)({}, e.target.name, e.target.value)
                  );
                });
            },
            handleSubmit: function(e) {
              e && e.preventDefault(),
                E(
                  (function(e) {
                    var t = {
                      errors: !1,
                      name: ' ',
                      sellingPrice: ' ',
                      loose: ' ',
                      upperLimit: ' ',
                      lowerLimit: ' ',
                    };
                    return (
                      '0' === e.sellingPrice &&
                        ((t.sellingPrice = 'Selling Price cannot be 0'),
                        (t.errors = !0)),
                      '0' === e.upperLimit &&
                        ((t.upperLimit = 'Upper Limit cannot be 0'),
                        (t.errors = !0)),
                      '0' === e.lowerLimit &&
                        ((t.lowerLimit = 'Lower Limit cannot be 0'),
                        (t.errors = !0)),
                      Number(e.upperLimit) <= Number(e.lowerLimit) &&
                        ((t.upperLimit =
                          'Upper Limit cannot be lower or equal to Lower limit'),
                        (t.errors = !0)),
                      Number(e.lowerLimit) >= Number(e.upperLimit) &&
                        ((t.lowerLimit =
                          'Lower Limit cannot be lower or equal to Upper limit'),
                        (t.errors = !0)),
                      Object.keys(e).forEach(function(a) {
                        ('upperLimit' === a && 'lowerLimit' === a) ||
                          ('' === e[a] &&
                            ((t[a] = 'Please fill out this field'),
                            (t.errors = !0)));
                      }),
                      t
                    );
                  })(u)
                ),
                j(!0);
            },
            error: b,
            values: u,
            isLoading: S,
          };
        },
        Kt = Object(E.a)(function(e) {
          var t;
          return {
            paper: Object(K.a)(
              {
                textAlign: 'center',
                padding: e.spacing(4),
                borderRadius: '10px',
                boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
              },
              e.breakpoints.only('sm'),
              { paddingLeft: e.spacing(2), paddingRight: e.spacing(2) }
            ),
            gridContainer: Object(K.a)(
              {
                display: 'grid',
                gridTemplateColumns: 'minmax(120px,1fr) minmax(300px,2fr)',
                '& > .MuiDivider-root': Object(K.a)(
                  { width: '60%', gridColumn: 'span 2', justifySelf: 'center' },
                  e.breakpoints.only('xs'),
                  { margin: '0 auto' }
                ),
              },
              e.breakpoints.only('xs'),
              { display: 'block' }
            ),
            formHeading:
              ((t = { marginTop: e.spacing(3), textAlign: 'right' }),
              Object(K.a)(t, e.breakpoints.only('sm'), { textAlign: 'center' }),
              Object(K.a)(t, e.breakpoints.only('xs'), { textAlign: 'left' }),
              t),
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: e.spacing(3),
              '& .MuiTextField-root': { width: '100%', maxWidth: '20rem' },
              '& > *': { margin: e.spacing(1) },
              '& > :first-child': { marginTop: 0 },
            },
            heading: { fontWeight: '700', marginBottom: e.spacing(2.5) },
            button: Object(K.a)(
              {
                gridColumn: 'span 2',
                justifySelf: 'center',
                width: '100%',
                maxWidth: '18rem',
                height: '3rem',
                borderRadius: '2rem',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginTop: e.spacing(1.5),
                textTransform: 'capitalize',
                boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
              },
              e.breakpoints.down('xs'),
              { maxWidth: '12rem' }
            ),
            radio: { display: 'flex', flexDirection: 'row' },
          };
        }),
        Qt = function() {
          var e = Object(g.h)().state,
            t = e.name,
            a = e.sellingPrice,
            n = e.id,
            l = e.loose,
            i = e.upperLimit,
            o = e.lowerLimit,
            c = Zt({
              name: t,
              sellingPrice: a,
              loose: l,
              id: n,
              upperLimit: i,
              lowerLimit: o,
            }),
            s = c.handleChange,
            u = c.handleSubmit,
            m = c.error,
            p = c.values,
            d = c.isLoading,
            f = Kt();
          return r.a.createElement(
            r.a.Fragment,
            null,
            d ? r.a.createElement(se, null) : null,
            r.a.createElement(
              Q.a,
              { className: f.paper },
              r.a.createElement(
                C.a,
                { variant: 'h4', className: f.heading },
                'Update Product'
              ),
              r.a.createElement(
                'form',
                {
                  noValidate: !0,
                  onSubmit: u,
                  autoComplete: 'off',
                  className: f.gridContainer,
                },
                r.a.createElement(Pe.a, null),
                r.a.createElement(
                  C.a,
                  { variant: 'h5', className: f.formHeading },
                  'Product'
                ),
                r.a.createElement(
                  'div',
                  { className: f.form },
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'name-input',
                    name: 'name',
                    label: 'Name',
                    value: p.name,
                    onChange: s,
                    error: !(' ' === m.name),
                    helperText: m.name,
                  }),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'sellingPrice-input',
                    type: 'number',
                    name: 'sellingPrice',
                    label: 'Selling Price',
                    InputProps: { inputProps: { min: 0 } },
                    value: p.sellingPrice,
                    onChange: s,
                    error: !(' ' === m.sellingPrice),
                    helperText: m.sellingPrice,
                  }),
                  r.a.createElement($.a, {
                    variant: 'filled',
                    id: 'upperLimit-input',
                    type: 'number',
                    name: 'upperLimit',
                    label: 'Recommended Limit',
                    InputProps: { inputProps: { min: 0 } },
                    value: p.upperLimit,
                    onChange: s,
                    error: !(' ' === m.upperLimit),
                    helperText: m.upperLimit,
                  }),
                  r.a.createElement($.a, {
                    variant: 'filled',
                    id: 'lowerLimit-input',
                    type: 'number',
                    name: 'lowerLimit',
                    label: 'Critical Limit',
                    InputProps: { inputProps: { min: 0 } },
                    value: p.lowerLimit,
                    onChange: s,
                    error: !(' ' === m.lowerLimit),
                    helperText: m.lowerLimit,
                  }),
                  r.a.createElement(
                    Bt.a,
                    { component: 'fieldset' },
                    r.a.createElement(Ft.a, { component: 'legend' }, 'Type'),
                    r.a.createElement(
                      zt.a,
                      {
                        name: 'loose',
                        value: p.loose,
                        onChange: s,
                        className: f.radio,
                      },
                      r.a.createElement(Mt.a, {
                        value: 'true',
                        control: r.a.createElement(Ht.a, null),
                        label: 'Loose',
                      }),
                      r.a.createElement(Mt.a, {
                        value: 'false',
                        control: r.a.createElement(Ht.a, null),
                        label: 'Packed',
                      })
                    )
                  )
                ),
                r.a.createElement(
                  N.a,
                  {
                    type: 'submit',
                    color: 'primary',
                    variant: 'contained',
                    className: f.button,
                    onClick: u,
                  },
                  'Update'
                )
              )
            )
          );
        },
        $t = a(335),
        Jt = a(331),
        Yt = a(148),
        Xt = a.n(Yt),
        ea = function() {
          var e = Object(n.useContext)(ot),
            t = e.snack,
            a = e.setSnack,
            l = t.open,
            i = t.message,
            o = t.action,
            c = t.actionParams,
            s = t.type,
            u = Object(g.g)(),
            m = function(e, t) {
              'clickaway' !== t &&
                a(function(e) {
                  return Object(re.a)(Object(re.a)({}, e), {}, { open: !1 });
                });
            };
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(
              $t.a,
              {
                anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                open: l,
                autoHideDuration: 6e3,
                onClose: m,
              },
              r.a.createElement(
                Jt.a,
                {
                  variant: 'filled',
                  elevation: 6,
                  severity: s,
                  onClose: m,
                  action: r.a.createElement(
                    r.a.Fragment,
                    null,
                    '' === o
                      ? null
                      : r.a.createElement(
                          N.a,
                          {
                            color: 'inherit',
                            size: 'small',
                            onClick: function() {
                              'EDIT' === o &&
                                u.push('/updateproduct', {
                                  name: c.name,
                                  sellingPrice: c.sellingPrice,
                                  loose: c.loose,
                                  id: c.id,
                                }),
                                a(function(e) {
                                  return Object(re.a)(
                                    Object(re.a)({}, e),
                                    {},
                                    { open: !1 }
                                  );
                                });
                            },
                          },
                          o
                        ),
                    r.a.createElement(
                      k.a,
                      {
                        size: 'small',
                        'aria-label': 'close',
                        color: 'inherit',
                        onClick: m,
                      },
                      r.a.createElement(Xt.a, { fontSize: 'small' })
                    )
                  ),
                },
                i
              )
            )
          );
        },
        ta = function(e) {
          var t = e.firstName,
            a = e.lastName,
            r = e.age,
            l = e.isStaff,
            i = e.email,
            o = Object(n.useState)({
              firstName: t,
              lastName: a,
              age: r,
              isStaff: l ? 'True' : 'False',
            }),
            c = Object(d.a)(o, 2),
            s = c[0],
            u = c[1],
            m = Object(n.useState)({
              errors: !1,
              firstName: ' ',
              lastName: ' ',
              age: ' ',
            }),
            p = Object(d.a)(m, 2),
            f = p[0],
            b = p[1],
            E = Object(n.useState)(''),
            x = Object(d.a)(E, 2),
            y = x[0],
            O = x[1],
            j = Object(n.useState)(!1),
            w = Object(d.a)(j, 2),
            k = w[0],
            S = w[1],
            C = Object(n.useState)(!1),
            N = Object(d.a)(C, 2),
            P = N[0],
            T = N[1],
            L = Object(g.g)(),
            D = Object(n.useContext)(ot).setSnack,
            I = (function() {
              var e = Object(v.a)(
                h.a.mark(function e(t) {
                  var a;
                  return h.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              T(!0),
                              (e.next = 4),
                              z('/auth/user_update/', t, null, L)
                            );
                          case 4:
                            T(!1),
                              D({
                                open: !0,
                                message: 'Succesfully updated '
                                  .concat(s.firstName, ' ')
                                  .concat(s.lastName),
                                action: '',
                                actionParams: '',
                                type: 'success',
                              }),
                              L.push('/employee'),
                              (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0.response),
                              400 === e.t0.response.status &&
                                ((a = Object.values(e.t0.response.data)[0][0]),
                                O(a),
                                T(!1),
                                D({
                                  open: !0,
                                  message: a,
                                  action: '',
                                  actionParams: '',
                                  type: 'error',
                                }));
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function(t) {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function() {
              if (!f.errors && k) {
                var e,
                  t = new FormData();
                t.append('email', i),
                  t.append('first_name', s.firstName),
                  t.append('last_name', s.lastName),
                  t.append('age', s.age),
                  t.append('is_staff', s.isStaff),
                  (e = console).log.apply(e, Object(Ue.a)(t)),
                  I(t),
                  S(!1);
              }
            },
            [f, k]
          );
          return {
            handleChange: function(e) {
              e.persist(),
                u(function(t) {
                  return Object(re.a)(
                    Object(re.a)({}, t),
                    {},
                    Object(K.a)({}, e.target.name, e.target.value)
                  );
                });
            },
            handleSubmit: function(e) {
              e && e.preventDefault(),
                b(
                  (function(e) {
                    var t = {
                      errors: !1,
                      firstName: ' ',
                      lastName: ' ',
                      age: ' ',
                    };
                    return (
                      '0' === e.age &&
                        ((t.age = 'Age cannot be 0'), (t.errors = !0)),
                      Object.keys(e).forEach(function(a) {
                        '' === e[a] &&
                          ((t[a] = 'Please fill out this field'),
                          (t.errors = !0));
                      }),
                      t
                    );
                  })(s)
                ),
                S(!0);
            },
            error: f,
            invalidCred: y,
            setInvalidCred: O,
            values: s,
            setError: b,
            isLoading: P,
          };
        },
        aa = Object(E.a)(function(e) {
          var t;
          return {
            paper: Object(K.a)(
              {
                textAlign: 'center',
                padding: e.spacing(4),
                borderRadius: '10px',
                boxShadow: '4px 4px 20px rgba(0,0,0,0.1)',
              },
              e.breakpoints.only('sm'),
              { paddingLeft: e.spacing(2), paddingRight: e.spacing(2) }
            ),
            gridContainer: Object(K.a)(
              {
                display: 'grid',
                gridTemplateColumns: 'minmax(120px,1fr) minmax(300px,2fr)',
                '& > .MuiDivider-root': Object(K.a)(
                  { width: '60%', gridColumn: 'span 2', justifySelf: 'center' },
                  e.breakpoints.only('xs'),
                  { margin: '0 auto' }
                ),
              },
              e.breakpoints.only('xs'),
              { display: 'block' }
            ),
            formHeading:
              ((t = { marginTop: e.spacing(3), textAlign: 'right' }),
              Object(K.a)(t, e.breakpoints.only('sm'), { textAlign: 'center' }),
              Object(K.a)(t, e.breakpoints.only('xs'), { textAlign: 'left' }),
              t),
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: e.spacing(3),
              '& .MuiTextField-root': { width: '100%', maxWidth: '20rem' },
              '& > *': { margin: e.spacing(1) },
              '& > :first-child': { marginTop: 0 },
            },
            heading: { fontWeight: '700', marginBottom: e.spacing(2.5) },
            button: Object(K.a)(
              {
                gridColumn: 'span 2',
                justifySelf: 'center',
                width: '100%',
                maxWidth: '18rem',
                height: '3rem',
                borderRadius: '2rem',
                fontSize: '1.5rem',
                fontWeight: '700',
                marginTop: e.spacing(1.5),
                textTransform: 'capitalize',
                boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
              },
              e.breakpoints.down('xs'),
              { maxWidth: '12rem' }
            ),
            radio: { display: 'flex', flexDirection: 'row' },
            invalid: {
              display: function(e) {
                return '' === e.invalid ? 'none' : 'block';
              },
            },
          };
        }),
        na = function() {
          var e = Object(g.h)().state,
            t = e.firstName,
            a = e.lastName,
            n = e.age,
            l = e.isStaff,
            i = e.email,
            o = ta({ firstName: t, lastName: a, age: n, isStaff: l, email: i }),
            c = o.handleChange,
            s = o.handleSubmit,
            u = o.error,
            m = o.invalidCred,
            p = o.values,
            d = o.isLoading,
            f = aa({ invalid: m });
          return r.a.createElement(
            r.a.Fragment,
            null,
            d ? r.a.createElement(se, null) : null,
            r.a.createElement(
              Q.a,
              { className: f.paper },
              r.a.createElement(
                C.a,
                { variant: 'h4', className: f.heading },
                'User Update'
              ),
              r.a.createElement(
                C.a,
                {
                  variant: 'h6',
                  color: 'error',
                  className: f.invalid,
                  gutterBottom: !0,
                },
                m
              ),
              r.a.createElement(
                'form',
                {
                  noValidate: !0,
                  onSubmit: s,
                  autoComplete: 'off',
                  className: f.gridContainer,
                },
                r.a.createElement(Pe.a, null),
                r.a.createElement(
                  C.a,
                  { variant: 'h5', className: f.formHeading },
                  'Account'
                ),
                r.a.createElement(
                  'div',
                  { className: f.form },
                  r.a.createElement($.a, {
                    disabled: !0,
                    variant: 'filled',
                    id: 'email-input',
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    value: i,
                    onChange: c,
                    helperText: ' ',
                  }),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'last-name-input',
                    name: 'firstName',
                    label: 'First Name',
                    value: p.firstName,
                    onChange: c,
                    error: !(' ' === u.firstName),
                    helperText: u.firstName,
                  }),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'first-name-input',
                    name: 'lastName',
                    label: 'Last Name',
                    value: p.lastName,
                    onChange: c,
                    error: !(' ' === u.lastName),
                    helperText: u.lastName,
                  }),
                  r.a.createElement($.a, {
                    required: !0,
                    variant: 'filled',
                    id: 'age-input',
                    name: 'age',
                    type: 'number',
                    label: 'Employee Age',
                    InputProps: { inputProps: { min: 0 } },
                    value: p.age,
                    onChange: c,
                    error: !(' ' === u.age),
                    helperText: u.age,
                  }),
                  r.a.createElement(
                    Bt.a,
                    { component: 'fieldset' },
                    r.a.createElement(Ft.a, { component: 'legend' }, 'Type'),
                    r.a.createElement(
                      zt.a,
                      {
                        name: 'isStaff',
                        value: p.isStaff,
                        onChange: c,
                        className: f.radio,
                      },
                      r.a.createElement(Mt.a, {
                        value: 'True',
                        control: r.a.createElement(Ht.a, null),
                        label: 'Manager',
                      }),
                      r.a.createElement(Mt.a, {
                        value: 'False',
                        control: r.a.createElement(Ht.a, null),
                        label: 'Employee',
                      })
                    )
                  )
                ),
                r.a.createElement(
                  N.a,
                  {
                    type: 'submit',
                    color: 'primary',
                    variant: 'contained',
                    className: f.button,
                    onClick: s,
                  },
                  'Update'
                )
              )
            )
          );
        },
        ra = Object(E.a)(function(e) {
          var t;
          return {
            container:
              ((t = {
                padding: e.spacing(5),
                paddingTop: e.spacing(13),
                marginLeft: 230,
              }),
              Object(K.a)(t, e.breakpoints.only('sm'), {
                marginLeft: function(e) {
                  return e.tab ? 230 : '4.5rem';
                },
              }),
              Object(K.a)(t, e.breakpoints.only('xs'), {
                marginLeft: 0,
                paddingLeft: e.spacing(3),
                paddingRight: e.spacing(3),
              }),
              t),
          };
        }),
        la = function(e) {
          var t = e.children,
            a = e.path,
            n = Object(p.a)(e, ['children', 'path']),
            l = localStorage.getItem('isStaff');
          return r.a.createElement(
            g.b,
            Object.assign({ path: a }, n, {
              render: function(e) {
                var a = e.location;
                return l
                  ? t
                  : r.a.createElement(g.a, {
                      to: { pathname: '/', state: { from: a } },
                    });
              },
            })
          );
        },
        ia = function(e) {
          var t = e.tabletOpen,
            a = ra({ tab: t });
          return r.a.createElement(
            'div',
            { className: a.container },
            r.a.createElement(
              ct,
              null,
              r.a.createElement(
                g.d,
                null,
                r.a.createElement(
                  g.b,
                  { exact: !0, path: '/' },
                  r.a.createElement(He, null)
                ),
                r.a.createElement(
                  la,
                  { path: '/employee' },
                  r.a.createElement(ut, null)
                ),
                r.a.createElement(
                  g.b,
                  { path: '/transaction' },
                  r.a.createElement(St, null)
                ),
                r.a.createElement(
                  g.b,
                  { path: '/inventory' },
                  r.a.createElement(At, null)
                ),
                r.a.createElement(
                  g.b,
                  { path: '/updateproduct' },
                  r.a.createElement(Qt, null)
                ),
                r.a.createElement(
                  g.b,
                  { path: '/updateemployee' },
                  r.a.createElement(na, null)
                ),
                r.a.createElement(
                  la,
                  { path: '/addemployee' },
                  r.a.createElement(Gt, null)
                )
              ),
              r.a.createElement(ea, null)
            )
          );
        },
        oa = a(149),
        ca = a.n(oa),
        sa = Object(E.a)(function(e) {
          return {
            container: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'calc(100vh - 10rem)',
            },
            button: Object(K.a)(
              {
                maxWidth: '18rem',
                height: '3rem',
                borderRadius: '1rem',
                fontWeight: '700',
                marginTop: e.spacing(1.5),
                boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
              },
              e.breakpoints.down('xs'),
              { maxWidth: '12rem' }
            ),
            img: Object(K.a)(
              { maxWidth: '30%', marginBottom: e.spacing(4) },
              e.breakpoints.down('xs'),
              { maxWidth: '50%' }
            ),
          };
        }),
        ua = function() {
          var e = sa(),
            t = Object(g.g)();
          return r.a.createElement(
            'div',
            { className: e.container },
            r.a.createElement('img', {
              src: ca.a,
              alt: 'illustration',
              className: e.img,
            }),
            r.a.createElement('h1', null, 'Page not found'),
            r.a.createElement(
              'h3',
              null,
              'The page you are looking for does not exist'
            ),
            r.a.createElement(
              N.a,
              {
                type: 'button',
                color: 'primary',
                variant: 'contained',
                className: e.button,
                onClick: function() {
                  t.push('/');
                },
              },
              'Home'
            )
          );
        },
        ma = a(150),
        pa = a.n(ma),
        da = Object(E.a)(function(e) {
          return {
            container: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'calc(100vh - 10rem)',
            },
            button: Object(K.a)(
              {
                maxWidth: '18rem',
                height: '3rem',
                borderRadius: '1rem',
                fontWeight: '700',
                marginTop: e.spacing(1.5),
                boxShadow: '0 5px 65px rgba(0,0,0,0.1)',
              },
              e.breakpoints.down('xs'),
              { maxWidth: '12rem' }
            ),
            img: Object(K.a)(
              { maxWidth: '30%', marginBottom: e.spacing(4) },
              e.breakpoints.down('xs'),
              { maxWidth: '50%' }
            ),
          };
        }),
        fa = function() {
          var e = da(),
            t = Object(g.g)();
          Object(n.useEffect)(function() {
            localStorage.removeItem('token'),
              localStorage.removeItem('isStaff');
          }, []);
          return r.a.createElement(
            'div',
            { className: e.container },
            r.a.createElement('img', {
              src: pa.a,
              alt: 'illustration',
              className: e.img,
            }),
            r.a.createElement('h1', null, 'UnAuthorized Access'),
            r.a.createElement('h3', null, 'Access Denied! Please login again'),
            r.a.createElement(
              N.a,
              {
                type: 'button',
                color: 'primary',
                variant: 'contained',
                className: e.button,
                onClick: function() {
                  t.push('/');
                },
              },
              'Login'
            )
          );
        },
        ga = function(e) {
          var t = e.children,
            a = e.path,
            n = Object(p.a)(e, ['children', 'path']),
            l = !!localStorage.getItem('token');
          return '/login' !== a
            ? r.a.createElement(
                g.b,
                Object.assign({ path: a }, n, {
                  render: function(e) {
                    var a = e.location;
                    return l
                      ? t
                      : r.a.createElement(g.a, {
                          to: { pathname: '/login', state: { from: a } },
                        });
                  },
                })
              )
            : '/login' === a
            ? r.a.createElement(
                g.b,
                Object.assign({ path: a }, n, {
                  render: function(e) {
                    var a = e.location;
                    return l
                      ? r.a.createElement(g.a, {
                          to: { pathname: '/', state: { from: a } },
                        })
                      : t;
                  },
                })
              )
            : void 0;
        },
        ba = function() {
          var e = r.a.useState(!1),
            t = Object(d.a)(e, 2),
            a = t[0],
            n = t[1],
            l = r.a.useState(!1),
            i = Object(d.a)(l, 2),
            o = i[0],
            c = i[1];
          return r.a.createElement(
            f.a,
            null,
            r.a.createElement(
              U,
              null,
              r.a.createElement(
                g.d,
                null,
                r.a.createElement(
                  ga,
                  { exact: !0, path: '/login' },
                  r.a.createElement(G, {
                    mobileOpen: a,
                    setMobileOpen: n,
                    tabletOpen: o,
                    setTabletOpen: c,
                  }),
                  r.a.createElement(me, null)
                ),
                r.a.createElement(
                  ga,
                  {
                    exact: !0,
                    path: [
                      '/',
                      '/inventory',
                      '/transaction',
                      '/employee',
                      '/addemployee',
                      '/updateproduct',
                      '/updateemployee',
                    ],
                  },
                  r.a.createElement(G, {
                    mobileOpen: a,
                    setMobileOpen: n,
                    tabletOpen: o,
                    setTabletOpen: c,
                  }),
                  r.a.createElement(Se, {
                    mobileOpen: a,
                    setMobileOpen: n,
                    tabletOpen: o,
                  }),
                  r.a.createElement(ia, { tabletOpen: o })
                ),
                r.a.createElement(g.b, {
                  path: '/unauthorized',
                  component: fa,
                }),
                r.a.createElement(g.b, { component: ua })
              )
            )
          );
        },
        ha = Object(s.a)({
          palette: {
            primary: { light: '#8FB7D6', main: '#4796bd', dark: '#3d97A8' },
            background: { default: '#f3f9fb' },
          },
          typography: {
            fontFamily: [
              'Lato',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
            ].join(','),
          },
          spacing: function(e) {
            return ''.concat(0.5 * e, 'rem');
          },
          text: {
            color: { veryDark: '#122e40', dark: '#495d69', darkGray: '#333' },
          },
        });
      var va = function() {
        return r.a.createElement(
          u.a,
          { theme: ha },
          r.a.createElement(m.a, null),
          r.a.createElement(ba, null)
        );
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      (c.a.defaults.baseURL = 'http://imweb.ap-south-1.elasticbeanstalk.com/'),
        c.a.interceptors.request.use(
          function(e) {
            var t = e,
              a = localStorage.getItem('token');
            return a && (t.headers.Authorization = 'Token '.concat(a)), t;
          },
          function(e) {
            return Promise.reject(e);
          }
        ),
        i.a.render(
          r.a.createElement(va, null),
          document.getElementById('root')
        ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
  },
  [[215, 1, 2]],
]);
//# sourceMappingURL=main.bf81e791.chunk.js.map
