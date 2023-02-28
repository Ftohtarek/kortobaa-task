import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  state('in', style({
    'max-width': '100%', 'opacity': '1','display':'block'
  })),
  state('out', style({
    'max-width': '0px', 'opacity': '0','display':'none'
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
    'opacity': '0', 'display': 'none', 'transform': 'scale3d(0.1, 0.1, 0.1)'
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
    style({ 'display': 'block' }),
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
]);

export const backoutAnimation = trigger('backOut', [
  state('inital', style({ 'opacity': '1', 'transform': 'translateX(0px) scale(1)' })),

  state('left', style({ 'opacity': '1' })),

  state('right', style({ 'opacity': '0' })),

  transition('inital => right', [
    group([
      animate('300ms ease-in-out', style({
        'transform': ' translateX(0px) ',
        'opacity': ' 0.7'
      })),

      animate('600ms ease-in-out', style({
        'transform': ' translateX(100%) scale(0.0)',
        'opacity': ' 0.2'
      })),

    ]
    )]),

  transition('inital => left', [
    group([
      animate('300ms ease-in-out', style({
        'transform': ' translateX(0px) ',
        'opacity': ' 0.7'
      })),

      animate('600ms ease-in-out', style({
        'transform': ' translateX(-100%) scale(0.2)',
        'opacity': ' 0.2'
      })),

    ]
    )]),
]);

export const backInAnimation = trigger('backIn', [

  transition('inital=> right', [
    style({ ' transform': 'translateX(100%) scale(0)' }),

    group([
      animate('300ms ease-in-out', style({
        'transform': ' translateX(-100%) scale(0.3)',
      })),

      animate('600ms ease-in-out', style({
        'transform': 'scale(1)',
      })),
    ]
    )]),

  transition('inital => left', [
    style({ ' transform': 'translateX(-100%) scale(0)' }),
    group([
      animate('300ms ease-in-out', style({
        'transform': ' translateX(100%) scale(0.7)',
      })),

      animate('600ms ease-in-out', style({
        'transform': 'scale(1)',
      })),
    ]
    )]),
]);

