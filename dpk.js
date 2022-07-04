const crypto = require('crypto')

const setEncryption = (dat) => {
  return crypto.createHash('sha3-512').update(dat).digest('hex')
}

const getEvent = (event) => {
  if (!event.partitionKey) {
    const data = JSON.stringify(event)
    candidate = setEncryption(data)
  }
  candidate = event.partitionKey
  return candidate
}

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = '0'
  const MAX_PARTITION_KEY_LENGTH = 256
  let candidate

  // to check if event has been triggered and separate it out as a standalone method
  if (event) {
    getEvent(event)
  }

  // to breakdown one if-else statements with separate concerns into
  // two separate if statements with single atomic conditions.
  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY
  }

  if (candidate && typeof candidate !== 'string') {
    candidate = JSON.stringify(candidate)
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = setEncryption(candidate)
  }

  return candidate
}

module.exports = { deterministicPartitionKey, getEvent, setEncryption }
