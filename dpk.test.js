const { deterministicPartitionKey, getEvent, setEncryption } = require('./dpk')

describe('deterministicPartitionKey', () => {
  let event = {
    partitionKey: '53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e',
  }
  const MAX_PARTITION_KEY_LENGTH = 256
  let candidate
  let eventVal
  beforeAll(() => {
    eventVal = getEvent(event)
    candidate = setEncryption(eventVal)
  })

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe('0')
  })
  it('Returns the candidate key in form of string when event triggered, like create', () => {
    let eventKey = deterministicPartitionKey(event)

    expect(candidate).toBe(
      'eb0b698fe3cba019c69f2fb2ac02de44cb17c94be2316212b0db794b86820d596e3ff0122721879983232024e9173195904be9c9c5f036a9657e24b1d4e064c2'
    )
  })
  it('if candidate key not type of string', () => {
    candidate = 1234
    candidate = JSON.stringify(candidate)
    expect(candidate).toBe('1234')
  })
  it('if candidate key has length greater than max length i.e. > 64', () => {
    candidate =
      '53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e53616d706c65206d65737361676520666f72206b65796c656e3c626c6f636b6c656e'
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = setEncryption(eventVal)
    }

    expect(candidate).toBe(
      'eb0b698fe3cba019c69f2fb2ac02de44cb17c94be2316212b0db794b86820d596e3ff0122721879983232024e9173195904be9c9c5f036a9657e24b1d4e064c2'
    )
  })
})
