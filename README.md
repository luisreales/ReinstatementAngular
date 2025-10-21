# Reinstatement Guide

Angular 20 + Tailwind CSS single‑page app used to calculate and display reinstatement totals. The UI has three areas: a left form (inputs + toggle), an account information card, and a submit button card.

## Prerequisites
- Node.js 18+ (20 LTS recommended)
- npm 9+ (or pnpm/yarn if you prefer)

## Install
```bash
npm install
# or
pnpm install
```

## Run (dev server)
```bash
npm start
# opens http://localhost:4200
```

## Build
```bash
npm run build
# output in dist/
```

## Test
```bash
npm test
```

## Tailwind setup
- Config: `tailwind.config.js`
- PostCSS: `postcss.config.js`
- Global styles: `src/styles.css` (imports Tailwind base/components/utilities)

## App structure
- `src/app/app.html` — shell layout and card markup (form, account info, submit)
- `src/app/app.ts` — reactive form, totals, and submit logic
- `src/app/components/amount-input/*` — amount input with currency symbol
- `src/app/components/account-info/*` — metrics display (totals, payment amount, frequency)

## Key behaviors
- Include Additional Fees toggle (`form.controls.includeAdditionalFees`) enables/disables the “Additional Fees” field. The switch uses Tailwind peer styles and smooth knob transition.
- Amount inputs accept non‑negative numbers; the `$` symbol is visually emphasized and inputs show a dimmed state when disabled.
- Account Information shows computed values from the form. Default seed values are applied in `app.ts` so the card renders meaningful numbers on first load.

Defaults (editable in `src/app/app.ts`)
- Past Due: `2425.10`
- Fees: repossession `100.00`, NSF `25.10`, late `30.00`, key `10.00`, sales tax `28.03`
- Additional Fees: disabled by default; set via the toggle

## Styling notes
- Cards use `bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200` with a header bar `bg-indigo-900`.
- The submit button is a pill: `rounded-full bg-indigo-900 text-white` inside its own small card.

## Commands reference
Common Angular CLI commands:
```bash
ng g c components/example     # generate a component
ng build --configuration production
ng test
ng serve -o                   # serve and open browser
```

## License
Private/internal use. Add a license if you plan to distribute.
