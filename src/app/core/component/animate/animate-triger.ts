import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  state('in', style({
    'max-width': '100%', 'opacity': '1', 'visibility': 'visible'
  })),
  state('out', style({
    'max-width': '0px', 'opacity': '0', 'visibility': 'hidden'
  })),

  transition('in => out', [group([
    animate('400ms ease-in-out', style({
      'opacity': '0'
    })),
    animate('600ms ease-in-out', style({
      'max-width': '0px'
    })),
    animate('700ms ease-in-out', style({
      'visibility': 'hidden'
    }))
  ]
  )]),
  transition('out => in', [group([
    animate('1ms ease-in-out', style({
      'visibility': 'visible'
    })),
    animate('800ms ease-in-out', style({
      'max-width': '100%'
    })),
    animate('1000ms ease-in-out', style({
      'opacity': '1'
    }))
  ]
  )])
]);

export const swapAnimation = trigger('swap', [
  state('in', style({
    'opacity': '1', 'display': 'block', 'transform': 'scale3d(1)'
  })),
  state('out', style({
    'opacity': '0', 'display': 'none','transform': 'scale3d(0.1, 0.1, 0.1)' 
  })),

  transition('in => out', [
    group([
      animate('300ms ease-in-out', style({
        'transform': ' scale3d(0.1, 0.1, 0.1)'
      })),
      animate('400ms ease-in-out', style({
        'opacity': '0'
      })),
      animate('400ms ease-in-out', style({
        'display': 'none'
      }))
    ]
    )]),

  transition('out => in', [
    style({ 'display': 'block'}),
    group([
      animate('500ms ease-in-out', style({
        'opacity': '1'
      })),
      animate('800ms ease-in-out', style({
        'transform': 'scale3d(1,1,1)'
      })
      ),
    ])
  ]

  )


  // transition('out => in', [group([
  //   animate('1ms ease-in-out', style({
  //     'display': 'block'
  //   })),
  //   animate('10ms ease-in-out', style({
  //     'visibility': 'visible'
  //   })),
  //   animate('700ms ease-in-out', style({
  //     'max-width': '100%'
  //   })),
  //   animate('4000ms ease-in-out', style({
  //     'opacity': '1'
  //   }))
  // ]
  // )])
]);