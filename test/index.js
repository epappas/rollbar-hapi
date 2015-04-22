/* -*- javascript -*- */
/* *******************************************************************
 *  @author Evangelos Pappas <epappas@evalonlabs.com>
 *  @copyright (C) 2014, evalonlabs
 *  Copyright 2015, evalonlabs
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2015 Evangelos Pappas
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 *  @doc
 *
 *  @end
 * *******************************************************************/

var Hapi = require('hapi');
var should = require('should');

describe('Plugin Exposes', function () {
    var server = new Hapi.Server();

    server.connection({ port: 7000 });

    server.register({
        register: require('../'),
        options: {
            accessToken: '90bdff07d44a4984aea0d0684bb6c142'
        }
    }, function (err) {
        if (err) throw err;
    });

    it('Should expose rollbar', function (done) {

        should(server.plugins['rollbar-hapi'].rollbar).not.be.empty

        done();
    });

    it('Should expose handleError', function (done) {

        should(server.methods.handleError).be.a.Function

        done();
    });

    it('Should expose handleErrorWithPayloadData', function (done) {

        should(server.methods.handleErrorWithPayloadData).be.a.Function

        done();
    });

    it('Should expose reportMessage', function (done) {

        should(server.methods.reportMessage).be.a.Function

        done();
    });

    it('Should expose reportMessageWithPayloadData', function (done) {

        should(server.methods.reportMessageWithPayloadData).be.a.Function

        done();
    });
});
