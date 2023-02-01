import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({opacity: 0})),
  transition('void <=> *', [
    style({ opacity: 0 }),
    animate(1000)
  ])
])

export let scrollAnimation = trigger('scrollAnimation', [
  state('show', style({
    opacity: 1,
    transform: "translateY(0)"
  })),
  state('hide',   style({
    opacity: 0,
    transform: "translateY(20%)"
  })),
  transition('show => hide', animate('500ms ease-out')),
  transition('hide => show', animate('500ms ease-in'))
]);