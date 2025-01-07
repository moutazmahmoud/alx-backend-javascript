const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi with hooks', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should log the correct total once for (100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log the correct total once for (10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
