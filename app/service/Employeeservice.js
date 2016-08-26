(function () {
    'use strict'
    mainApp.service('employeeservice', ['$ajaxFactory', myFunc]);

    function myFunc($ajaxFactory) {
        this.datSource = [];
        this.getFirstList = function () {
            var obj = [];
            for(var i = 0; i < this.datSource.length; i++) {
                var record = this.datSource[i];
                obj.push(record.firstName)
            }
            return obj;
        }
        this.getLastNameList = function () {
            var obj = [];
            for(var i = 0; i < this.datSource.length; i++) {
                var record = this.datSource[i];
                obj.push(record.lastName)
            }
            return obj;
        }
        this.getRecordByFname = function (fname) {
            var obj = [];
            for(var i = 0; i < this.datSource.length; i++) {
                var record = this.datSource[i];
                if(record.firstName == fname) {
                    obj.push(record)
                }
            }
            return obj;
        }
        this.getRecordByFnameandRegion = function (fname, reg) {
            var flist = this.getRecordByFname(fname)
            var obj = [];
            for(var i = 0; i < flist.length; i++) {
                var record = this.datSource[i];
                if(record.region == reg) {
                    obj.push(record)
                }
            }
            return obj;
        }
        this.getRecordsByProperty = function (prop) {
            var obj = [];
            for(var i = 0; i < this.datSource.length; i++) {
                var record = this.datSource[i];
                if(record[prop]) {
                    obj.push(record)
                }
            }
            return obj;
        }
        this.getRecordByid = function (id) {
            var obj = [];
            for(var i = 0; i < this.datSource.length; i++) {
                var record = this.datSource[i];
                if(record.employeeid == id) {
                    obj.push(record);
                }
            }
            return obj;
        }
        this.isEmployeeidPresents = function (id) {
            for(var i = 0; i < this.datSource.length; i++) {
                var record = this.datSource[i];
                if(record.employeeid == id) {
                    return true;
                }
            }
            return false;
        }
        this.getRecordBySal = function (sal) {
                var obj = [];
                for(var i = 0; i < this.datSource.length; i++) {
                    var record = this.datSource[i];
                    if(record.salary < sal) {
                        obj.push(record);
                    }
                }
                return obj;
            }
            /*this.getPhoneNumber = function (phonenm, type) {
                var obj = [];
                for(var i = 0; i < this.datSource.length; i++) {
                    var record = this.datSource[i];
                    if(record.phoneNumber.index(type) > 0 == phonenm) {
                        obj.push(record);
                    }
                }
                return obj;
            }*/
        this.getRecordByFnameandEmail = function (fname) {
            var obj = [];
            for(var i = 0; i < this.datSource.length; i++) {
                var record = this.datSource[i];
                if(record.firstName == fname) {
                    return record.emailAddress;
                }
            }
            return obj;
        }
    }
})()
