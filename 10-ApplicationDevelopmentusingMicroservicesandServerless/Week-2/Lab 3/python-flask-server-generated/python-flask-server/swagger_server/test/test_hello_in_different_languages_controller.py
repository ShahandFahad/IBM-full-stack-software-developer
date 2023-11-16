# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.test import BaseTestCase


class TestHelloInDifferentLanguagesController(BaseTestCase):
    """HelloInDifferentLanguagesController integration test stubs"""

    def test_greetings_get(self):
        """Test case for greetings_get

        Returns a list of Greetings
        """
        response = self.client.open(
            '/greetings',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
