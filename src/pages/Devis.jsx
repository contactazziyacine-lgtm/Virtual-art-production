import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Devis() {
  const { t } = useLang();
  const d = t.devis;
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState('');
  const [checkedServices, setCheckedServices] = useState([]);
  const [checkedSocials, setCheckedSocials] = useState([]);

  const toggle = (list, setList, val) => setList(prev => prev.includes(val) ? prev.filter(x=>x!==val) : [...prev,val]);

  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); window.scrollTo({top:0,behavior:'smooth'}); };

  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: 8 };
  const labelStyle = { fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: 0.5 };
  const sectionTitle = { gridColumn: '1/-1', fontSize: 14, fontWeight: 700, color: '#0066ff', textTransform: 'uppercase', letterSpacing: 1, paddingTop: 8 };
  const divider = { gridColumn: '1/-1', border: 'none', borderTop: '1px solid rgba(255,255,255,0.06)', margin: '8px 0' };

  if (submitted) {
    return (
      <div style={{ paddingTop: 72, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: 40 }}>
          <div style={{ fontSize: 72, marginBottom: 24 }}>✅</div>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>{d.successTitle}</h2>
          <p style={{ color: '#8892a4', fontSize: 17, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 24px', textAlign: 'justify' }}>{d.successText}</p>
          <button onClick={() => setSubmitted(false)} className="btn-outline">{d.successBtn}</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '80px 5%' }}>
        <div className="section-tag">{d.tag}</div>
        <div className="section-title">{d.title}</div>
        <p className="section-sub" style={{ marginTop: 16, textAlign: 'justify' }}>{d.sub}</p>

        <div className="quote-form" style={{ background: '#1e1e2a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 60, maxWidth: 900, margin: '60px auto 0' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

              <div style={sectionTitle}>{d.sGeneral}</div>
              {[[d.fName,'text',true],[d.fCompany,'text',false],[d.fSector,'text',false],[d.fPhone,'tel',true],[d.fEmail,'email',true],[d.fCity,'text',false]].map(([label,type,req]) => (
                <div key={label} style={fieldStyle}><label style={labelStyle}>{label}{req?' *':''}</label><input type={type} required={req} /></div>
              ))}

              <hr style={divider} />
              <div style={sectionTitle}>{d.sService}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.servicesLabel}</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 4 }}>
                  {d.serviceOpts.map(s => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
                      <input type="checkbox" checked={checkedServices.includes(s)} onChange={() => toggle(checkedServices,setCheckedServices,s)} style={{ accentColor: '#0066ff', width: 18, height: 18 }} />{s}
                    </label>
                  ))}
                </div>
              </div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sGoal}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.goalLabel}</label>
                <select><option value="">{d.goalPlaceholder}</option>{d.goalOpts.map(o => <option key={o}>{o}</option>)}</select>
              </div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.descLabel}</label>
                <textarea placeholder={d.descPlaceholder} style={{ minHeight: 140 }} />
              </div>
              <div style={fieldStyle}><label style={labelStyle}>{d.dateLabel}</label><input type="date" /></div>
              <div style={fieldStyle}><label style={labelStyle}>{d.placeLabel}</label><input type="text" /></div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sVideo}</div>
              <div style={fieldStyle}><label style={labelStyle}>{d.durationLabel}</label><select><option value="">{d.selectPlaceholder}</option>{d.durationOpts.map(o => <option key={o}>{o}</option>)}</select></div>
              <div style={fieldStyle}><label style={labelStyle}>{d.scriptLabel}</label><select><option value="">{d.selectPlaceholder}</option>{d.scriptOpts.map(o => <option key={o}>{o}</option>)}</select></div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}><label style={labelStyle}>{d.daysLabel}</label><select><option value="">{d.selectPlaceholder}</option>{d.daysOpts.map(o => <option key={o}>{o}</option>)}</select></div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sSocial}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.platformsLabel}</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 4 }}>
                  {d.platforms.map(s => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
                      <input type="checkbox" checked={checkedSocials.includes(s)} onChange={() => toggle(checkedSocials,setCheckedSocials,s)} style={{ accentColor: '#0066ff' }} />{s}
                    </label>
                  ))}
                </div>
              </div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.socialSvcLabel}</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 4 }}>
                  {d.socialSvc.map(s => (
                    <label key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>
                      <input type="checkbox" style={{ accentColor: '#0066ff' }} />{s}
                    </label>
                  ))}
                </div>
              </div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sBudget}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.budgetLabel}</label>
                <div className="budget-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 4 }}>
                  {d.budgetOpts.map(b => (
                    <div key={b} onClick={() => setBudget(b)} style={{
                      background: budget === b ? 'rgba(0,102,255,0.12)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${budget === b ? '#0066ff' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: 8, padding: '12px 8px', textAlign: 'center', fontSize: 13, cursor: 'pointer',
                      color: budget === b ? '#0066ff' : 'rgba(255,255,255,0.7)', transition: 'all 0.2s'
                    }}>{b}</div>
                  ))}
                </div>
              </div>

              <hr style={divider} />
              <div style={sectionTitle}>{d.sFiles}</div>
              <div style={{ gridColumn: '1/-1', ...fieldStyle }}>
                <label style={labelStyle}>{d.filesLabel}</label>
                <input type="file" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov" style={{ padding: 12 }} />
              </div>

              <hr style={divider} />
              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                  <input type="checkbox" required style={{ accentColor: '#0066ff', width: 18, height: 18, marginTop: 1, flexShrink: 0 }} />{d.consent} *
                </label>
              </div>
              <div style={{ gridColumn: '1/-1' }}>
                <button type="submit" style={{ width: '100%', padding: 18, background: '#0066ff', color: '#fff', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer', letterSpacing: 0.3, marginTop: 8 }}>{d.submit}</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <style>{`@media(max-width:768px){.form-grid{grid-template-columns:1fr!important}.budget-grid{grid-template-columns:1fr 1fr!important}.quote-form{padding:32px 20px!important}}`}</style>
    </div>
  );
}
