import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  state('in', style({
    'max-width': '100%', 'opacity': '1', 'display': 'block'
  })),
  state('out', style({
    'max-width': '0px', 'opacity': '0', 'display': 'none'
  })),

  transition('in => out', [group([
    animate('400ms ease-in-out', style({
      'opacity': '0'
    })),
    animate('600ms ease-in-out', style({
      'max-width': '0px'
    })),
    animate('700ms ease-in-out', style({
      'display': 'hidden'
    }))
  ]
  )]),

  transition('out => in', [
    style({ 'display': 'block' }),

    group([
      animate('400ms ease-in-out', style({
        'max-width': '100%'
      })),
      animate('600ms ease-in-out', style({
        'opacity': '1'
      }))
    ]
    )])
]);

export const swapAnimation = trigger('swap', [
  transition(':enter', [
    style({
      'opacity': '0', 'transform': 'scale3d(0.1, 0.1, 0.1)'
    }),
    group([
      animate('1000ms ease-in-out', style({
        'transform': ' scale3d(1,1, 1)'
      })),
      animate('1500ms ease-in-out', style({
        'opacity': '1', 'display': 'block'
      })),
    ]
    )]),

  transition(':leave', [
    style({ 'opacity': '1', 'display': 'block', 'transform': 'scale3d(1,1,1)' }),
    group([
      animate('250ms ease-in-out', style({
        'opacity': '0'
      })),
      animate('500ms ease-in-out', style({
        'transform': 'scale3d(.1,.1,.1)'
      })
      ),
    ])
  ]
  )
]);


