from tastypie.serializers import Serializer
import json
from tastypie.exceptions import UnsupportedFormat , BadRequest


class JsonOnlySerializer(Serializer):

    # limit the available formats
    formats = ['json']
    content_types = {'json': 'application/json'}

    # catch the Unsupported exception and raise BadRequest
    def deserialize(self, content, format='application/json'):
        try:
            return super(JsonOnlySerializer, self).deserialize(content, format)
        except UnsupportedFormat as e:
            raise BadRequest("Unsupported content type (%s)." % format)

class JsonSerializer(Serializer):
    def deserialize(self, content, format='application/json'):
        """
        Given some data and a format, calls the correct method to deserialize
        the data and returns the result.
        """
        method = None

        format = format.split(';')[0]

        method = self._from_methods.get(format)

        if method is None:
            raise UnsupportedFormat(format)

        if isinstance(content, six.binary_type):
            content = force_text(content)

        return method(content)

