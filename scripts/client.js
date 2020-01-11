'use strict'

/* global Acels */
/* global Rack */
/* global Mixer */
/* global IO */

function Client () {
  this.el = document.createElement('div')

  this.acels = new Acels(this)

  this.io = new IO(this)
  this.rack = new Rack(this)
  this.mixer = new Mixer(this)

  this.channel = 0

  this.install = (host = document.body) => {
    host.appendChild(this.el)
    this.acels.set('Play', 'Test Midi', 'X', () => { this.rack.play(this.channel, 0) })
    this.acels.set('Play', 'Test Midi', 'C', () => { this.rack.play(this.channel, 1) })
    this.acels.set('Play', 'Test Midi', 'V', () => { this.rack.play(this.channel, 2) })
    this.acels.set('Play', 'Test Midi', 'Z', () => { this.rack.play(this.channel, 3) })
    this.acels.set('Play', 'Test Midi', 'S', () => { this.rack.play(this.channel, 4) })
    this.acels.set('Play', 'Test Midi', 'D', () => { this.rack.play(this.channel, 5) })
    this.acels.set('Play', 'Test Midi', 'F', () => { this.rack.play(this.channel, 6) })
    this.acels.set('Play', 'Test Midi', 'G', () => { this.rack.play(this.channel, 7) })
    this.acels.set('Play', 'Test Midi', 'E', () => { this.rack.play(this.channel, 8) })
    this.acels.set('Play', 'Test Midi', 'R', () => { this.rack.play(this.channel, 9) })
    this.acels.set('Play', 'Test Midi', 'T', () => { this.rack.play(this.channel, 10) })
    this.acels.set('Play', 'Test Midi', 'Y', () => { this.rack.play(this.channel, 11) })
    this.acels.set('Play', 'Test Midi', '4', () => { this.rack.play(this.channel, 12) })
    this.acels.set('Play', 'Test Midi', '5', () => { this.rack.play(this.channel, 13) })
    this.acels.set('Play', 'Test Midi', '6', () => { this.rack.play(this.channel, 14) })
    this.acels.set('Play', 'Test Midi', '7', () => { this.rack.play(this.channel, 15) })

    this.acels.set('Play', 'Next', ']', () => { this.modChannel(1) })
    this.acels.set('Play', 'Prev', '[', () => { this.modChannel(-1) })

    this.acels.install(window)
    this.mixer.install(this.el)
    this.rack.install(this.el)
    this.io.install(this.el)
  }

  this.start = (bpm = 120) => {
    console.info('Client', 'Starting..')
    console.info(`${this.acels}`)
    this.mixer.setBpm(bpm)
  }

  this.modChannel = (mod) => {
    this.channel += mod
    this.channel = this.channel % 16
    console.log('Channel', this.channel)
  }
}
