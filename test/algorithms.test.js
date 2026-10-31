import assert from 'node:assert/strict'
import test from 'node:test'

import {
  FACE_META,
  algorithms,
  formatSequence,
  inverseMove,
  moveLabel,
  parseMove,
  parseSequence,
} from '../src/algorithms.js'

test('parseMove reads a quarter turn', () => {
  const move = parseMove('R')

  assert.equal(move.face, 'R')
  assert.equal(move.axis, 'x')
  assert.equal(move.layer, 1)
  assert.equal(move.turns, 1)
  assert.equal(move.prime, false)
  assert.equal(move.suffix, '')
  assert.equal(move.angle, -Math.PI / 2)
  assert.equal(move.color, FACE_META.R.color)
})

test('parseMove reads prime, unicode prime, and double turns', () => {
  assert.equal(parseMove("R'").angle, Math.PI / 2)
  assert.equal(parseMove('R’').angle, Math.PI / 2)
  assert.equal(parseMove('R2').angle, -Math.PI)
  assert.equal(parseMove('R2').turns, 2)
  assert.equal(parseMove('R2').prime, false)
  assert.equal(parseMove('u').axis, 'y')
})

test('parseMove supports slice moves', () => {
  assert.deepEqual(
    { axis: parseMove('M').axis, layer: parseMove('M').layer },
    { axis: 'x', layer: 0 },
  )
  assert.equal(parseMove('E').axis, 'y')
  assert.equal(parseMove('S').axis, 'z')
  assert.equal(parseMove('M2').angle, Math.PI)
})

test('parseMove rejects unknown notation', () => {
  assert.throws(() => parseMove('X'), /Unknown cube move/)
  assert.throws(() => parseMove('R3'), /Unknown cube move/)
  assert.throws(() => parseMove(''), /Unknown cube move/)
})

test('parseSequence handles spaces and compact notation', () => {
  const spaced = parseSequence("R U R' U'")
  const compact = parseSequence("RUR'U'")
  const mixed = parseSequence("  R2   U'  ")

  assert.deepEqual(spaced.map(moveLabel), ['R', 'U', 'R′', 'U′'])
  assert.deepEqual(
    compact.map(moveLabel),
    spaced.map(moveLabel),
  )
  assert.deepEqual(mixed.map(moveLabel), ['R2', 'U′'])
})

test('parseSequence accepts an array of moves', () => {
  const moves = parseSequence(['F', 'R', "U'"])

  assert.deepEqual(moves.map(moveLabel), ['F', 'R', 'U′'])
})

test('inverseMove reverses a single turn', () => {
  const prime = inverseMove(parseMove('R'))
  const normal = inverseMove(parseMove("R'"))
  const double = inverseMove(parseMove('R2'))

  assert.equal(prime.suffix, "'")
  assert.equal(prime.angle, Math.PI / 2)
  assert.equal(normal.suffix, '')
  assert.equal(normal.angle, -Math.PI / 2)
  assert.equal(double.suffix, '2')
  assert.equal(Math.abs(double.angle), Math.PI)
})

test('inverseMove round-trips every move in the library', () => {
  for (const algorithm of algorithms) {
    for (const move of parseSequence(algorithm.moves)) {
      const roundTrip = inverseMove(inverseMove(move))

      assert.equal(roundTrip.face, move.face)
      assert.equal(roundTrip.suffix, move.suffix)
      assert.equal(roundTrip.angle, move.angle)
    }
  }
})

test('every library algorithm parses into valid moves', () => {
  const allowedCategories = new Set(['기본', 'OLL', 'PLL', '고급'])
  const ids = new Set()

  for (const algorithm of algorithms) {
    assert.ok(algorithm.id, 'algorithm needs an id')
    assert.ok(!ids.has(algorithm.id), `duplicate id: ${algorithm.id}`)
    ids.add(algorithm.id)

    assert.ok(algorithm.title.length > 0)
    assert.ok(algorithm.english.length > 0)
    assert.ok(allowedCategories.has(algorithm.category))
    assert.ok(algorithm.moves.length > 0)
    assert.match(algorithm.accent, /^#[0-9a-f]{6}$/i)

    const moves = parseSequence(algorithm.moves)
    assert.equal(moves.length, algorithm.moves.length)
    for (const move of moves) {
      assert.ok(Object.hasOwn(FACE_META, move.face))
      assert.ok(Number.isFinite(move.angle))
      assert.notEqual(move.angle, 0)
    }
  }
})

test('formatSequence joins moves for display', () => {
  assert.equal(formatSequence(["R", "U'", 'R2']), "R U' R2")
})
