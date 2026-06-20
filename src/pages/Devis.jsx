import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { sendForm } from '../lib/sendForm';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';

export default function Devis() {
  const { t } = useLang();
  const d = t.devis;
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [budget, setBudget] = useState('');
  const [checkedServices, setCheckedServices] = useState([]);
  const [checkedSocials, setCheckedSocials] = useState([]);

  const toggle = (list, setList, val) => setList(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const v = k => (fd.get(k) || '').toString().trim();
    const fileNames = Array.from(fd.getAll('files')).map(f => (f && f.name) ? f.name : '').filter(Boolean);
    const socialServices = fd.getAll('socialServices').map(x => x.toString());

    const fields = [
      [d.fName, v('name')], [d.fCompany, v('company')], [d.fSector, v('sector')],
      [d.fPhone, v('phone')], [d.fEmail, v('email')], [d.fCity, v('city')],
      [d.servicesLabel, checkedServices], [d.goalLabel, v('goal')],
      [d.descLabel, v('description')], [d.dateLabel, v('date')], [d.placeLabel, v('place')],
      [d.durationLabel, v('duration')], [d.scriptLabel, v('script')], [d.daysLabel, v('days')],
      [d.platformsLabel, checkedSocials], [d.socialSvcLabel, socialServices],
      [d.budgetLabel, budget], [d.filesLabel, fileNames],
    ];

    try {
      await sendForm({ subject: `${d.tag} — ${v('name') || 'Nouveau projet'}`, replyTo: v('email'), fields });
    } catch (err) {
      // Si l'envoi e-mail échoue, on affiche quand même la confirmation pour
      // ne pas perdre la saisie : le client peut nous joindre directement.
    }
    setSending(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ACCENT = '#12A065';
  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: 8 };
  const labelStyle = { fontFamily: 'var(--display)', fontSize: 12.5, fontWeight: 600, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: '.06em' };
  const sectionTitle = { gridColumn: '1/-1', fontFamily: 'var(--display)', fontSize: 13, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.1em', paddingTop: 8 };
  const divider = { gridColumn: '1/-1', border: 'none', borderTop: '1px solid var(--line)', margin: '8px 0' };
  const checkLabel = { display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: 'var(--ink-soft)' };

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 72 }}>
        <div style={{ textAlign: 'center', padding: 40 }}>
          <div style={{ width: 80, height: 80, margin: '0 auto 24px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38, color: 'var(--accent)' }}>✓</div>
          <h2 className="h1" style={{ marginBottom: 16 }}>{d.successTitle}</h2>
          <p className="lead" style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto 24px' }}>{d.successText}</p>
          <button onClick={() => setSubmitted(false)} className="btn btn--ghost">{d.successBtn}</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Seo title={d.title} description={d.sub} />

      {/* ============ HÉRO ============ */}
      <section className="band--deep" style={{ position: 'relative', paddingTop: 132 }}>
        <div className="wrap" style={{ color: '#fff', paddingTop: 'clamp(24px,4vw,40px)', paddingBottom: 'clamp(8px,2vw,18px)' }}>
          <div className="reveal in" style={{ maxWidth: 760 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 18 }}>{d.tag}</div>
            <h1 className="display" style={{ color: '#fff', marginBottom: 18, textWrap: 'balance' }}>{d.title}</h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 600 }}>{d.sub}</p>
          </div>
        </div>
      </section>

      {/* ============ FORMULAIRE ============ */}
      <section className="band band--surface">
        <Reveal className="quote-form" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 'clamp(28px,4vw,56px)', maxWidth: 900, margin: '0 auto', boxShadow: '0 10px 40px rgba(10,50,42,.05)' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

              <div style={sectionTitle}>{d.sGeneral}</div>
              {[[d.fName, 'text', true, 'name'], [d.fCompany, 'text', false, 'company'], [d.fSector, 'text', false, 'sector'], [d.fPhone, 'tel', true, 'phone'], [d.fEmail, 'email', true, 'email'], [d.fCity, 'text', false, 'city']].map(([label, type, req, name]) => (
                <div key={name} style={fieldStyle}><label style={labelStyle}>{label}{req ? ' *' : ''}</label><input type={type} name={name} required={req} /></div>
              ))}

              <hr style={divider} />
              <div style={sectionTitle}>{d.sService}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.servicesLabel}</label>
                <div className="check-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 4 }}>
                  {d.serviceOpts.map(svc => (
                    <label key={svc} style={checkLabel}>
                      <input type="checkbox" checked={checkedServices.includes(svc)} onChange={() => toggle(checkedServices, setCheckedServices, svc)} style={{ accentColor: ACCENT, width: 18, height: 18 }} />{svc}
                    </label>
                  ))}
                </div>
              </div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sGoal}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.goalLabel}</label>
                <select name="goal"><option value="">{d.goalPlaceholder}</option>{d.goalOpts.map(o => <option key={o}>{o}</option>)}</select>
              </div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.descLabel}</label>
                <textarea name="description" placeholder={d.descPlaceholder} style={{ minHeight: 140 }} />
              </div>
              <div style={fieldStyle}><label style={labelStyle}>{d.dateLabel}</label><input type="date" name="date" /></div>
              <div style={fieldStyle}><label style={labelStyle}>{d.placeLabel}</label><input type="text" name="place" /></div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sVideo}</div>
              <div style={fieldStyle}><label style={labelStyle}>{d.durationLabel}</label><select name="duration"><option value="">{d.selectPlaceholder}</option>{d.durationOpts.map(o => <option key={o}>{o}</option>)}</select></div>
              <div style={fieldStyle}><label style={labelStyle}>{d.scriptLabel}</label><select name="script"><option value="">{d.selectPlaceholder}</option>{d.scriptOpts.map(o => <option key={o}>{o}</option>)}</select></div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}><label style={labelStyle}>{d.daysLabel}</label><select name="days"><option value="">{d.selectPlaceholder}</option>{d.daysOpts.map(o => <option key={o}>{o}</option>)}</select></div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sSocial}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.platformsLabel}</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 4 }}>
                  {d.platforms.map(svc => (
                    <label key={svc} style={{ ...checkLabel, gap: 8 }}>
                      <input type="checkbox" checked={checkedSocials.includes(svc)} onChange={() => toggle(checkedSocials, setCheckedSocials, svc)} style={{ accentColor: ACCENT }} />{svc}
                    </label>
                  ))}
                </div>
              </div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.socialSvcLabel}</label>
                <div className="check-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 4 }}>
                  {d.socialSvc.map(svc => (
                    <label key={svc} style={{ ...checkLabel, gap: 8 }}>
                      <input type="checkbox" name="socialServices" value={svc} style={{ accentColor: ACCENT }} />{svc}
                    </label>
                  ))}
                </div>
              </div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sBudget}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.budgetLabel}</label>
                <div className="budget-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 4 }}>
                  {d.budgetOpts.map(b => {
                    const on = budget === b;
                    return (
                      <div key={b} onClick={() => setBudget(b)} style={{
                        background: on ? 'var(--accent-soft)' : 'var(--paper)',
                        border: `1px solid ${on ? 'var(--accent)' : 'var(--line-2)'}`,
                        borderRadius: 'var(--r)', padding: '13px 8px', textAlign: 'center', fontSize: 13, cursor: 'pointer',
                        fontWeight: on ? 700 : 500,
                        color: on ? 'var(--accent-2)' : 'var(--ink-soft)', transition: 'all .2s var(--ease)'
                      }}>{b}</div>
                    );
                  })}
                </div>
              </div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sFiles}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.filesLabel}</label>
                <input type="file" name="files" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov" style={{ padding: 12 }} />
              </div>

              <hr style={divider} />
              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
                  <input type="checkbox" required style={{ accentColor: ACCENT, width: 18, height: 18, marginTop: 1, flexShrink: 0 }} />{d.consent} *
                </label>
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <button type="submit" disabled={sending} className="btn" style={{ width: '100%', justifyContent: 'center', padding: 18, fontSize: 16, marginTop: 8, opacity: sending ? 0.85 : 1, cursor: sending ? 'wait' : 'pointer' }}>{sending ? 'Envoi…' : d.submit}</button>
              </div>
            </div>
          </form>
        </Reveal>
      </section>

      <style>{`@media(max-width:768px){.form-grid{grid-template-columns:1fr!important}.budget-grid{grid-template-columns:1fr 1fr!important}.quote-form{padding:28px 20px!important}}`}</style>
    </div>
  );
}
